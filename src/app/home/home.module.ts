import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {HomeRoutingModule} from "./home-routing.module";
import {ListTicketsComponent} from "./list-tickets/list-tickets.component";
import {TicketComponent} from "./list-tickets/ticket/ticket.component";
import {BlurTicketImageDirective} from "./list-tickets/ticket/shared/directives/blur-ticket-image.directive";
import {UneSurDeuxPipe} from "./list-tickets/ticket/shared/pipes/une-sur-deux.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ListTicketsComponent,
    TicketComponent,
    BlurTicketImageDirective,
    UneSurDeuxPipe
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeRoutingModule
  ],
})
export class HomeModule {
}
