import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketInterceptorService {

  constructor() { }
  private socketDisconnect = new Subject<any>();
  private refresh = new Subject<any>();

  private socketConnect = new Subject<any>();


  disconnect = this.socketDisconnect.asObservable();
  connect = this.socketConnect.asObservable();
  refreshObservable = this.refresh.asObservable();


  // Service message commands
  callDisconnectMethod(value: any) {
    this.socketDisconnect.next(value);

  }

  callConnectMethod(value: any) {
    this.socketConnect.next(value);
  }

  resetService() {
    this.refresh = new Subject<any>()
    this.refreshObservable = this.refresh.asObservable();
  }

  callRefershMethod(value: any) {
    this.refresh.next(value);
  }

}
