import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstNameService {

  constructor() { }

  baseImage = {
    file_img_url: 'http://puffintheme.com/angular/epic/',
  };
}
