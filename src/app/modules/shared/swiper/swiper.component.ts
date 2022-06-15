import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { File as image4File, ImagesService } from 'src/app/services/images.service';
import { EMPTY, map, Observable } from 'rxjs';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
})
export class SwiperComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  files$: Observable<image4File[]> = EMPTY;

  constructor(private imageService: ImagesService) {}
  ngOnInit(): void {
    this.files$ = this.imageService.getAlbum('spielgruppe-carousel')?.pipe(map((p) => p.files));
  }
}
