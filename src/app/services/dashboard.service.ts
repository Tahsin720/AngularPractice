import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}
  herosList() : Observable<any[]>
  {
    return of([
      {
        name: 'Spiderman',
      },
      {
        name:'Superman',
      }
    ]);
  }
}
