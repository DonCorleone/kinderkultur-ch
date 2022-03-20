import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpielgruppeIconComponent } from './spielgruppe-icon/spielgruppe-icon.component';
import { SchlosswochenIconComponent } from './schlosswochen-icon/schlosswochen-icon.component';
import { FigurentheaterIconComponent } from './figurentheater-icon/figurentheater-icon.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { SwiperComponent } from './swiper/swiper.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { ImagesService } from '../../services/images.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SpielgruppeIconComponent,
    SchlosswochenIconComponent,
    FigurentheaterIconComponent,
    HeaderComponent,
    LogoComponent,
    SwiperComponent,
  ],
  imports: [CommonModule, NgxUsefulSwiperModule, HttpClientModule],
  exports: [
    SpielgruppeIconComponent,
    SchlosswochenIconComponent,
    FigurentheaterIconComponent,
    HeaderComponent,
    LogoComponent,
    NgxUsefulSwiperModule,
    SwiperComponent,
  ],
})
export class SharedModule {}
