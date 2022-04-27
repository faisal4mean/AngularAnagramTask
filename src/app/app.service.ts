import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getData = new Subject<any>();

  returnData(): Observable<any> {
    return this.getData.asObservable();
  }
}
