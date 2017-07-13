import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alt-nav',
  templateUrl: './app.alt-nav-component.html',
  styleUrls: ['./app.component.scss']
})
export class AltNavComponent {
  @Input() toShowNav;
  @Output() toggle = new EventEmitter();
  
  toggleNav(){
    this.toShowNav = !this.toShowNav;
    this.toggle.emit(this.toShowNav);
  }
}
