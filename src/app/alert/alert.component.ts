import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  dismissed = false;

  @Input() succesesedBook: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDismiss() {
    this.dismissed = true;
    this.succesesedBook = false;
  }

}
