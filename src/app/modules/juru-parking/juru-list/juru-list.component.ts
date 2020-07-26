import { Component, OnInit } from '@angular/core';
import { Paginator } from 'app/configs/paginator.config';
import { Observable } from 'rxjs';
import { JuruService } from '@core-service/juru-parkiri-service';
import { LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juru-list',
  templateUrl: './juru-list.component.html',
  styleUrls: ['./juru-list.component.scss']
})
export class JuruListComponent implements OnInit {
  title: String = "Juru Parkir - List"
  isView: boolean = true;
  juruParkir$: Observable<any>;
  constructor(private juruSe: JuruService, private router: Router) { }
  rowsPerPage = Paginator.rowsPerPage;
  rowsPerPageOptions = Paginator.rowsPerPageOptions;
  ngOnInit() {

    this.juruParkir$ = this.juruSe.geJuruList("", 1, 10);
  }
  page = 1;
  onTableLazyLoad(event: LazyLoadEvent) {
    const page = event.first / event.rows + 1;
    const limit = event.rows;

    if (this.page != page) {
      this.juruParkir$ = this.juruSe.geJuruList("", page, limit);
    }


  }
  onView(car) {
    console.log("car");

    this.router.navigate(["juru-parkir/" + car])

  }

}
