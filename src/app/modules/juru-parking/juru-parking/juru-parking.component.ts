import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JuruService } from '@core-service/juru-parkiri-service';
import { MessageBoxService } from 'app/core/core.module';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-juru-parking',
  templateUrl: './juru-parking.component.html',
  styleUrls: ['./juru-parking.component.scss']
})
export class JuruParkingComponent implements OnInit {
  title: string;
  isInDetail: boolean;
  isView: boolean;
  isAddNew: boolean;
  formReady: FormGroup;
  id: string;
  subMenu: any[] = []

  constructor(
    private jurs: JuruService, private message: MessageBoxService,
    private loc: Location, private router: Router, private route: ActivatedRoute,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
  }

  onRouterOutletActivate(event) {
    this.title = event.title;
    this.isView = event.isView;
    this.isInDetail = event.isInDetail;
    this.isAddNew = event.isAddNew;
    this.formReady = event.formReady;
    this.id = event.id;
  }
  onCancel() {

    this.loc.back();


  }

  onBack() {
    this.loc.back();

  }

  onDelete() {
    this.confirmationService.confirm({
      message: 'Are you sure want to delete ?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.jurs.delete(this.id).subscribe(
          res => {
            this.message.showSuccess(res);
            this.router.navigate(["juru-parkir"])
          }
        )
      },
    });


  }
  onAdd() {

    // form.isActive = form.status;
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  onSave() {
    const form = this.formReady.getRawValue();
    this.jurs.post(form).subscribe(res => {
      this.message.showSuccess(res);
      this.router.navigate(["juru-parkir"])
    });

  }
  onEdit() {
    const form = this.formReady.getRawValue();
    this.jurs.update(form).subscribe(res => {
      this.message.showSuccess(res);
      this.router.navigate(["juru-parkir"])
    })

  }

}
