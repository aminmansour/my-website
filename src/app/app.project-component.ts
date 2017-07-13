import { Component } from '@angular/core';
import { InformationProvider } from "app/information-provider.service";

@Component({
  selector: 'project',
  templateUrl: './app.project-component.html',
  styleUrls: ['./app.component.scss']
})
export class ProjectComponent {
    constructor(public infoSource:InformationProvider){}
}
