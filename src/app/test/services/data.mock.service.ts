import {Observable, of} from 'rxjs';

/**
 * A class representing a mock service for backend calls.
 * @class  MockDataService
 *
 */
export class MockDataService {

  /**
   * A mock method used for getting mocked data.
   * @method  getData
   * @param {string} location
   * @returns {Observable<any>}
   */
  getData(location: string): Observable<any> {
    return of('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>');
  }
}
