import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavBarComponent } from './app.nav-bar-component'; 
import { HomeComponent } from './app.home-component';
import { IntroductionComponent } from './app.introduction-component';
import { AboutComponent } from './app.about-component';
import { InformationProvider } from './information-provider.service'
import { ServiceComponent } from "app/app.service-component";
import { FooterComponent } from './app.footer-component'
import { ContactComponent } from "app/app.contact-component";
import { ProjectComponent } from "app/app.project-component";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AltNavComponent } from "app/app.alt-nav-component";

const firebaseConfig = {
   apiKey: "AIzaSyDstJyvQ3RQqPWKag8hhYxLGEnt41iVtsc",
    authDomain: "amins-website.firebaseapp.com",
    databaseURL: "https://amins-website.firebaseio.com",
    projectId: "amins-website",
    storageBucket: "amins-website.appspot.com",
    messagingSenderId: "472323971711" 
}
  
@NgModule({
  declarations: [
    AppComponent, 
    NavBarComponent, 
    HomeComponent, 
    IntroductionComponent, 
    AboutComponent, 
    ServiceComponent, 
    ContactComponent,
    ProjectComponent, 
    FooterComponent,
    AltNavComponent
  ],
  imports: [
    BrowserModule, 
     ReactiveFormsModule, 
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule
  ],
  providers: [InformationProvider],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
