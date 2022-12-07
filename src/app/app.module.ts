import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListTicketsComponent} from './list-tickets/list-tickets.component';
import {TicketComponent} from './ticket/ticket.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from './login/login.component';
import { UneSurDeuxPipe } from './_pipe/une-sur-deux.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListTicketsComponent,
    TicketComponent,
    LoginComponent,
    UneSurDeuxPipe
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
