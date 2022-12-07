import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TicketImpl} from "../_bean/ticket";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TicketService} from "../_service/ticket.service";

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {
  indexOfTicketToEdit!: number;
  ticketToEdit!: TicketImpl;
  @ViewChild('editTicketModal') editTicketModal!: ElementRef;

  constructor(private modalService: NgbModal, public ticketService: TicketService) {
  }

  editTicket(index: number) {
    this.indexOfTicketToEdit = index;
    this.ticketToEdit = new TicketImpl(this.ticketService.get(index));
    this.modalService.open(this.editTicketModal);
  }

  validEditTicket() {
    this.ticketService.edit(this.indexOfTicketToEdit, this.ticketToEdit);
  }

  deleteTicket(index: number) {
    this.ticketService.delete(index);
  }

  ngOnInit(): void {
  }
}
