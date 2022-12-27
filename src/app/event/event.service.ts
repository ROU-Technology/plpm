import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EventService {
  base: string = 'http://localhost:1337/api/';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http
      .get(`${this.base}events`)
      .pipe(tap((data) => console.log(data)));
  }
}
