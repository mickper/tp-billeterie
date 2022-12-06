import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ticket} from "../bean/ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {

  modify: boolean = false;

  @Input()
  public ticket?: Ticket;
  @Output()
  public deleteEmitter = new EventEmitter();

  edit() {
    this.modify = !this.modify;
  }

  public delete() {
    this.deleteEmitter.emit(this.ticket);
  }
}
