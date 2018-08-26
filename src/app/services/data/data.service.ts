import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

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
    return this.http.get(location, {responseType: 'text'});
  }
}
