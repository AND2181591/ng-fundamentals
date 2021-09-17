import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";

const routes: Routes = [
    { path: "events", component: EventsListComponent }, 
    { path: "events/:id", component: EventDetailsComponent }, 
    { path: "", redirectTo: "/events", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { Routes } from "@angular/router";

// import { EventDetailsComponent } from "./events/event-details/event-details.component";
// import { EventsListComponent } from "./events/events-list.component";

// export const appRoutes: Routes = [
//     { path: "events", component: EventsListComponent }, 
//     { path: "events/:id", component: EventDetailsComponent }, 
//     { path: "", redirectTo: "/events", pathMatch: "full" }
// ];