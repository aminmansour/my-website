import { Component } from '@angular/core';
import { InformationProvider } from "app/information-provider.service";

@Component({
  selector: 'introduction',
  templateUrl: './app.introduction-component.html',
  styleUrls: ['./app.component.scss']
})
export class IntroductionComponent {
   constructor(public infoSource:InformationProvider){}
}
