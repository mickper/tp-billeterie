import {Component, OnInit} from '@angular/core';
import {MOCK_TICKETS} from '../ticket.mock';
import {Ticket} from "../bean/ticket";

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent {
  tickets: Ticket[] = MOCK_TICKETS;

  constructor() {
  }

  deleteTicket(ticket: Ticket) {
    const index = this.tickets.indexOf(ticket, 0);
    console.log(index);
    console.log(ticket);
    if (index > -1) {
      this.tickets.splice(index, 1);
    }
  }
}
