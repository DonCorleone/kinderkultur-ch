import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-spielgruppe',
  templateUrl: './spielgruppe.component.html',
  styleUrls: ['./spielgruppe.component.scss'],
})
export class SpielgruppeComponent {
  constructor(private location: Location) {}
  back(): void {
    this.location.back();
  }
}
