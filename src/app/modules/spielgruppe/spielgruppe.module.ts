import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpielgruppeRoutingModule } from './spielgruppe-routing.module';
import { SpielgruppeComponent } from './spielgruppe.component';
import { SharedModule } from '../shared/shared.module';
import { SpielgruppeInfoComponent } from './spielgruppe-info/spielgruppe-info.component';
import { SpielgruppeOverviewComponent } from './spielgruppe-overview/spielgruppe-overview.component';
import { SpielgruppeLeitungComponent } from './spielgruppe-leitung/spielgruppe-leitung.component';
import { SpielgruppeOrtComponent } from './spielgruppe-ort/spielgruppe-ort.component';

@NgModule({
  declarations: [SpielgruppeComponent, SpielgruppeInfoComponent, SpielgruppeOverviewComponent, SpielgruppeLeitungComponent, SpielgruppeOrtComponent],
  imports: [CommonModule, SpielgruppeRoutingModule, SharedModule],
})
export class SpielgruppeModule {}
