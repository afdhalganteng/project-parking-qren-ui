import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlSavePipe } from './html-save.pipe';
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [HtmlSavePipe, SafeUrlPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HtmlSavePipe, SafeUrlPipe
  ]
})
export class InnerpipeModule { }
