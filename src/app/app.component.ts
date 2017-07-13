import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  altNavPresent = false;

  checkNavState(isShown) {
    this.altNavPresent = isShown;
  }

  closeNav() {
    if (this.altNavPresent) {
      this.altNavPresent = !this.altNavPresent;
    }
  }

}

