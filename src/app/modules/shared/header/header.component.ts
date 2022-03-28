import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() @HostBinding('class.spielgruppe-bg-color') public isSpielgruppe = false;
}
