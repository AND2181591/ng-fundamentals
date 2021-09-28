import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './routes';

import {
  EventsListComponent, 
  EventThumbnailComponent, 
  EventService, 
  EventDetailsComponent, 
  CreateEventComponent, 
  EventRouteActivator, 
  EventListResolver, 
  CreateSessionsComponent, 
  SessionListComponent, 
  DurationPipe, 
  UpvoteComponent, 
  VoterService, 
  LocationValidator
} from "./events/index";

import {
  CollapsibleWellComponent, 
  Toastr, 
  TOASTR_TOKEN, 
  JQ_TOKEN, 
  SimpleModalComponent, 
  ModalTriggerDirective
} from "./common/index";

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

let toastr: Toastr = window["toastr"];
let jQuery = window["$"];

@NgModule({
  declarations: [
    AppComponent, 
    EventsListComponent,
    EventThumbnailComponent, 
    NavbarComponent, 
    EventDetailsComponent, 
    CreateEventComponent, 
    Error404Component, 
    CreateSessionsComponent, 
    SessionListComponent, 
    CollapsibleWellComponent, 
    DurationPipe, 
    SimpleModalComponent, 
    ModalTriggerDirective, 
    UpvoteComponent, 
    LocationValidator
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService, 
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: jQuery }, 
    EventRouteActivator, 
    EventListResolver, 
    AuthService, 
    {
      provide: "canDeactivateCreateEvent", 
      useValue: checkDirtyState
    }, 
    VoterService
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