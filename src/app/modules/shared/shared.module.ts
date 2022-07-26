import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpielgruppeIconComponent } from './spielgruppe-icon/spielgruppe-icon.component';
import { SchlosswochenIconComponent } from './schlosswochen-icon/schlosswochen-icon.component';
import { FigurentheaterIconComponent } from './figurentheater-icon/figurentheater-icon.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { BackIconComponent } from './back-icon/back-icon.component';

@NgModule({
  declarations: [
    SpielgruppeIconComponent,
    SchlosswochenIconComponent,
    FigurentheaterIconComponent,
    HeaderComponent,
    LogoComponent,
    BackIconComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    SpielgruppeIconComponent,
    SchlosswochenIconComponent,
    FigurentheaterIconComponent,
    HeaderComponent,
    LogoComponent,
    BackIconComponent,
  ],
})
export class SharedModule {}
