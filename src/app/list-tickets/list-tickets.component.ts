import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MOCK_TICKETS} from '../ticket.mock';
import {Ticket, TicketImpl} from "../bean/ticket";
import {tick} from "@angular/core/testing";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  tickets!: Ticket[];
  ticketToEdit!: Ticket;
  @ViewChild('editTicketModal') editTicketModal!: ElementRef;

  constructor(private modalService: NgbModal) {
  }

  editTicket(index: number) {
    this.ticketToEdit = this.tickets[index];
    this.modalService.open(this.editTicketModal);
  }

  deleteTicket(index: number) {
    this.tickets.splice(index, 1);
  }

  ngOnInit(): void {
    this.tickets = [];
    for (let ticket of MOCK_TICKETS) {
      this.tickets.push(new TicketImpl(ticket));
    }
  }
}
