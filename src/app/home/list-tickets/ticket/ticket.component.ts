import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

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

  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.ref.markForCheck();
    }, 1000);
  }

  edit() {
    this.editEmitter.emit();
  }

  public delete() {
    this.deleteEmitter.emit();
  }
}
