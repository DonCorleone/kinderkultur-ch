import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-spielgruppe-icon',
  templateUrl: './spielgruppe-icon.component.html',
  styleUrls: ['./spielgruppe-icon.component.scss'],
})
export class SpielgruppeIconComponent {
  @Input() hideTypeFont = false;
  @Input() isModuleIcon = false;
}
