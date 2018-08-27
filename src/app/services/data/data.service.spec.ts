import {inject, TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  const location = 'assets/lorem.html';
  const mockHtml = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>' +
    '<h1>Optime, inquam. Eam tum adesse, cum dolor omnis absit</h1>';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('expects service to fetch proper data',
    inject([HttpTestingController, DataService],
      (httpMock: HttpTestingController, service: DataService) => {

        service.getData(location).subscribe(response => {
          expect(response).toContain('<h1>');
          expect(response).toContain('<p>');
        });

        const req = httpMock.expectOne('assets/lorem.html');
        expect(req.request.method).toEqual('GET');
        expect(req.request.responseType).toEqual('text');
        req.flush(mockHtml);
      })
  );
});

