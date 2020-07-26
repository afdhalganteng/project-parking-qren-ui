import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchValue: string;
  searchStatus: any;
  status: boolean = true;
  formSearch: FormGroup
  @Input() isActive: boolean;
  constructor(private formBuilder: FormBuilder) {
    this.formSearch = this.formBuilder.group({
      inquiry: ['', Validators.required],
      isActive: [true],
    });
    this.searchStatus = [
      {
        label: 'Active', value: true
      },
      { label: 'Inactive', value: false }
    ]
  }


  @Output() refresh = new EventEmitter<boolean>();
  @Output() search = new EventEmitter<FormGroup>();
  @Output() searchDrop = new EventEmitter<FormGroup>();

  ngOnInit() {
    this.searchValue = ""
  }

  onRefresh() {
    this.refresh.emit(true);
  }

  onPosSearch() {
    this.search.emit(this.formSearch);
  }

  onSearch() {
    this.search.emit(this.formSearch);
  }

}
