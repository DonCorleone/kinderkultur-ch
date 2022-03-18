import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpielgruppeIconComponent } from './spielgruppe-icon/spielgruppe-icon.component';
import { SchlosswochenIconComponent } from './schlosswochen-icon/schlosswochen-icon.component';
import { FigurentheaterIconComponent } from './figurentheater-icon/figurentheater-icon.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SpielgruppeIconComponent, SchlosswochenIconComponent, FigurentheaterIconComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [SpielgruppeIconComponent, SchlosswochenIconComponent, FigurentheaterIconComponent, HeaderComponent],
})
export class SharedModule {}
