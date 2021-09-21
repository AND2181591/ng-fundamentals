import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes';

import {
  EventsListComponent, 
  EventThumbnailComponent, 
  EventService, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventRouteActivator, 
  EventListResolver
} from "./events/index";

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';


@NgModule({
  declarations: [
    AppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    Error404Component
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [
    EventService, 
    ToastrService, 
    EventRouteActivator, 
    EventListResolver, 
    AuthService, 
    {
      provide: "canDeactivateCreateEvent", 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) {
    return window.confirm("You have not saved this event, do you really want to cancel?");
  }
  return true;
}