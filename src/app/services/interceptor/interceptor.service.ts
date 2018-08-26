import {Injectable, isDevMode} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoremIpsumConstants} from '../../util/lorem-ipsum-constants';

/**
 * A class representing a interceptor for each request sent.
 * @class  InterceptorService
 * @constructor
 *
 */
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  /**
   * Method which occurs every time request is sent.
   * @method  intercept
   * @param {HttpRequest<any>} req
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (isDevMode()) {
      console.log(LoremIpsumConstants.REQUEST_STRING_START);
      console.log(req);
      console.log(LoremIpsumConstants.REQUEST_STRING_END);
    }

    return next.handle(req)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Method for global handling of errors.
   * @method  handleError
   * @param {HttpErrorResponse} error
   * @returns {Observable<never>}
   */
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(LoremIpsumConstants.ERROR_OCCURED_STRING, error.error.message);
    } else {
      console.error(`${LoremIpsumConstants.BACKEND_ERROR_STATUS_STRING} ${error.status}
       ${LoremIpsumConstants.BACKEND_ERROR_BODY_STRING} ${error.error}`);
    }
    return throwError(LoremIpsumConstants.ERROR_OCCURED_STRING);
  }
}
