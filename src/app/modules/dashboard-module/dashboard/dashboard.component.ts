import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title: string;
  constructor() { }
  subMenu: any[] = []
  ngOnInit() {
  }

  onRouterOutletActivate(event) {
    this.title = event.title;

  }
}
