import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'spielgruppe',
    loadChildren: () =>
      import('./modules/spielgruppe/spielgruppe.module').then(
        (m) => m.SpielgruppeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
