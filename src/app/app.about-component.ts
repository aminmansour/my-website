import {Component} from '@angular/core';
import {InformationProvider} from "app/information-provider.service";
import {ShuffleJS} from 'shufflejs'

@Component({
  selector: 'about',
  templateUrl: './app.about-component.html',
  styleUrls: ['./app.component.scss']
})
export class AboutComponent {
  constructor(public infoSource: InformationProvider) {}
}
