import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Drawing } from '../../models/drawing';

@Injectable()
export class DrawingService {
  private drawingsUrl = 'http://localhost:5000/drawings';

  constructor(private http: HttpClient) { }

  getDrawings (offset: number = null): Observable<Drawing[]> {
    const getDrawingsUrl = offset ? this.drawingsUrl + '?offset=' + offset : this.drawingsUrl;
    return this.http.get<Drawing[]>(getDrawingsUrl)
      .pipe(
        catchError(this.handleError('getDrawings', []))
      );
  }

  getDrawing (drawing_id: string): Observable<Drawing> {
    return this.http.get<Drawing>(this.drawingsUrl + '/' + drawing_id);
  }

  updateDrawing (drawing: Drawing): Observable<Drawing> {
    return this.http.put<Drawing>(this.drawingsUrl + '/' + drawing.id, drawing)
      .pipe(
        tap(_ => console.log('Update drawing')),
        catchError(this.handleError<any>('updateDrawing', []))
      );
  }

  deleteDrawing (drawing_id: string): Observable<Drawing> {
    return this.http.delete<Drawing>(this.drawingsUrl + '/' + drawing_id);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
