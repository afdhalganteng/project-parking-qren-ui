import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-data-selected',
  templateUrl: './no-data-selected.component.html',
  styleUrls: ['./no-data-selected.component.scss']
})
export class NoDataSelectedComponent implements OnInit {
  @Input() isDelShow: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.isDelShow = false;
  }

}
