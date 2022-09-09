import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Output() booked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  book() {
    this.booked.emit(true);
  }

}
