import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TicketImpl} from "./shared/models/ticket";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketService} from "./shared/services/ticket.service";

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  tickets!: TicketImpl[];
  indexOfTicketToEdit!: number;
  ticketToEdit!: TicketImpl;
  @ViewChild('editTicketModal') editTicketModal!: ElementRef;

  constructor(private modalService: NgbModal, public ticketService: TicketService, private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }

  editTicket(index: number) {
    this.ticketToEdit = null as any;
    this.indexOfTicketToEdit = index;
    this.ticketService.get(index).subscribe((ticket) => {
      this.ticketToEdit = new TicketImpl(ticket);
    });
    this.modalService.open(this.editTicketModal);
  }

  validEditTicket() {
    this.ticketService.edit(this.indexOfTicketToEdit, this.ticketToEdit).subscribe();
  }

  deleteTicket(index: number) {
    this.ticketService.delete(index).subscribe();
  }

  ngOnInit(): void {
    this.ticketService.loadTickets().subscribe((tickets) => this.tickets = tickets);
  }
}
