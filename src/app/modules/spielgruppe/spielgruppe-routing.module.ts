import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpielgruppeComponent } from './spielgruppe.component';

const routes: Routes = [{ path: '', component: SpielgruppeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpielgruppeRoutingModule { }
