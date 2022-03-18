import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpielgruppeRoutingModule } from './spielgruppe-routing.module';
import { SpielgruppeComponent } from './spielgruppe.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SpielgruppeComponent],
  imports: [CommonModule, SpielgruppeRoutingModule, SharedModule],
})
export class SpielgruppeModule {}
