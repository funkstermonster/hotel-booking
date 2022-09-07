import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip';
  slides = [
    {'image': 'https://picsum.photos/343/212'},
    {'image': 'https://picsum.photos/343/212'},
    {'image': 'https://picsum.photos/343/212'},
    {'image': 'https://picsum.photos/343/212'}
  ]
}
