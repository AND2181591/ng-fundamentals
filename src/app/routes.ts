import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  CreateEventComponent, 
  EventDetailsComponent, 
  EventRouteActivator, 
  EventListResolver, 
  EventsListComponent, 
  CreateSessionsComponent
} from "./events/index";


const routes: Routes = [
    { path: "events/new", component: CreateEventComponent, 
      canDeactivate: ["canDeactivateCreateEvent"] }, 
    { path: "events", component: EventsListComponent, 
      resolve: { events: EventListResolver } }, 
    { path: "events/:id", component: EventDetailsComponent, 
      canActivate: [EventRouteActivator] }, 
    { path: "events/sessions/new", component: CreateSessionsComponent }, 
    { path: "404", component: Error404Component }, 
    { path: "", redirectTo: "/events", pathMatch: "full" }, 
    { path: "user", 
      loadChildren: () => import("./user/user.module").then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }