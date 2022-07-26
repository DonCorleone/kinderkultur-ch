import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import {
  ImagesService,
  Netlifile,
} from 'src/app/services/images.service';
import { EMPTY, map, Observable, Subject, takeUntil } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { environment } from '../../../../environments/environment';

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

  files$: Observable<Netlifile[]> = EMPTY;

  private _ngDestroy$ = new Subject<void>();

  constructor(
    private imageService: ImagesService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this._ngDestroy$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const match = query.match('\\(max-width:\\s(\\d+)\\.98px\\)');
            const width = match?.length ? match[1] : '2048';

            this.files$ = this.imageService.listAssets().pipe(
              map((p) => {
                p.forEach(
                  (image) =>
                    (image.path = `${environment.URL}${image.path}?nf_resize=fit&w=${width}`)
                );
                return p;
              })
            );
            break;
          }
        }
      });
  }
}
