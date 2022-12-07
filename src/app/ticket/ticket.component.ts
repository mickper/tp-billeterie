import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ticket} from "../bean/ticket";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() public name!: string;
  @Input() public description!: string;
  @Input() public nbLefts!: number;
  @Input() public url!: string;

  @Output() public editEmitter = new EventEmitter();
  @Output() public deleteEmitter = new EventEmitter();

  edit() {
    this.editEmitter.emit();
  }

  public delete() {
    this.deleteEmitter.emit();
  }
}
