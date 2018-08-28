import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/internal/operators';

/**
 * A class representing a service for backend calls.
 * @class  DataService
 * @constructor
 *
 * @param {HttpClient} http
 *   Instance of HttpClient for creating http requests.
 *
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  /**
   * A method used for HTTP calls for html file.
   * @method  getData
   * @param {string} location
   * @returns {Observable<any>}
   */
  getData(location: string): Observable<any> {
    return this.http.get(location, {responseType: 'text'}).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * A method for catching errors and handling them in service.
   * Possible adding custom DataService logic based on this error.
   * For this case just rethrowing the error.
   * @param {HttpErrorResponse} error
   * @returns {Observable<never>}
   */
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
