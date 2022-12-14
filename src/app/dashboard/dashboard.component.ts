import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  booked = false;

  images = [
    {
      src: 'https://picsum.photos/900/500?random=1'
    },
    {
      src: 'https://picsum.photos/900/500?random=2'
    },
    {
      src: 'https://picsum.photos/900/500?random=3'
    },
    {
      src: 'https://picsum.photos/900/500?random=4'
    }
  ]

  sequence(n: number): Array<number> {
    return Array(n);
  }

  handleBooking(booked: boolean) {
    this.booked = booked;
  }

}
