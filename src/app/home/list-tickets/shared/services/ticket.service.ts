import {Injectable} from '@angular/core';
import {TicketImpl} from "../models/ticket";
import {MOCK_TICKETS} from "../../../../ticket.mock";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets!: TicketImpl[];

  constructor() {
  }

  loadTickets(): Observable<TicketImpl[]> {
    return new Observable<TicketImpl[]>((observer) => {
      this.tickets = MOCK_TICKETS.map((ticket) => new TicketImpl(ticket));
      observer.next(this.tickets);
      observer.complete();
      return () => {
        // Rien à faire dans le complete
      }
    }).pipe(delay(1000));
  }

  get(index: number): Observable<TicketImpl> {
    return new Observable<TicketImpl>((observer) => {
      let completeTimeout = setTimeout(() => {
        observer.next(this.tickets[index]);
        observer.complete();
      }, 1000);
      return () => {
        clearTimeout(completeTimeout);
      }
    });
  }

  edit(index: number, newT: TicketImpl): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      let completeTimeout = setTimeout(() => {
        this.tickets[index] = newT;
        observer.next(true);
        observer.complete();
      }, 1000);
      return () => {
        clearTimeout(completeTimeout);
      }
    });
  }

  delete(index: number): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      let completeTimeout = setTimeout(() => {
        this.tickets.splice(index, 1);
        observer.next(true);
        observer.complete();
      }, 1000);
      return () => {
        clearTimeout(completeTimeout);
      }
    });
  }

  add(ticket: TicketImpl): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      let completeTimeout = setTimeout(() => {
        this.tickets.push(ticket);
        observer.next(true);
        observer.complete();
      }, 1000);
      return () => {
        clearTimeout(completeTimeout);
      }
    });
  }
}
