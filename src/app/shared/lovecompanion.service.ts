import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import {
  Cta2data,
  LoveCompanionInterface,
} from '../interface/loveandcompanionInterface';

@Injectable({
  providedIn: 'root',
})
export class LoveCompanionService {
  private ctaUrl = 'https://api.plpm.org/api/cta2';
  constructor(private http: HttpClient) {}
  getLoveCompanion(): Observable<Cta2data> {
    return this.http.get<LoveCompanionInterface>(this.ctaUrl).pipe(
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
