import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Hero, HeroInterface } from '../interface/homehero';

@Injectable({
  providedIn: 'root',
})
export class HomeSliderService {
  private sliderUrl = 'https://api.plpm.org/api/sliders';
  constructor(private http: HttpClient) {}

  getsliders(): Observable<Hero[]> {
    return this.http.get<HeroInterface>(this.sliderUrl).pipe(
      map((data) => {
        return data.data;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = ' ';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code:${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
