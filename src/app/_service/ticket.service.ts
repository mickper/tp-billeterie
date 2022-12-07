import {Injectable} from '@angular/core';
import {TicketImpl} from "../_bean/ticket";
import {MOCK_TICKETS} from "../ticket.mock";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets!: TicketImpl[];

  constructor() {
    this.loadTickets().then((tickets) => this.tickets = tickets);
  }

  loadTickets(): Promise<TicketImpl[]> {
    return new Promise<TicketImpl[]>((resolve, reject) => {
        setTimeout(() => {
          resolve(MOCK_TICKETS.map((ticket) => new TicketImpl(ticket)))
        }, 1000);
      }
    );
  }

  get(index: number): TicketImpl {
    return this.tickets[index];
  }

  edit(index: number, newT: TicketImpl): boolean {
    this.tickets[index] = newT;
    return true;
  }

  delete(index: number): boolean {
    this.tickets.splice(index, 1);
    return true;
  }

  add(ticket: TicketImpl): boolean {
    this.tickets.push(ticket);
    return true;
  }
}
