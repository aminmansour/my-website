import { Component } from '@angular/core';
import { InformationProvider } from "app/information-provider.service";


@Component({
  selector: 'service',
  templateUrl: './app.service-component.html',
  styleUrls: ['./app.component.scss']
})
export class ServiceComponent {
  constructor(public infoSource:InformationProvider){}
 
}
