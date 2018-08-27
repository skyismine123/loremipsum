import {TestBed} from '@angular/core/testing';

import {TextHighlighterComponent} from './text-highlighter.component';
import {DataService} from '../../services/data/data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ComponentFixture} from '@angular/core/testing/src/component_fixture';
import {AppModule} from '../../app.module';
import {MockDataService} from '../../test/services/data.mock.service';

describe('TextHighlighterComponent', () => {
  let fixture: ComponentFixture<TextHighlighterComponent>;
  let component: TextHighlighterComponent;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [
        TextHighlighterComponent,
        {provide: DataService, useClass: MockDataService}
      ],
    });

    fixture = TestBed.createComponent(TextHighlighterComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);

    spyOn(dataService, 'getData').and.callThrough();
  });

  it('should create component', () => {
    const container: HTMLElement = fixture.nativeElement.querySelector('.container');
    expect(component).toBeDefined();
    expect(container).toBeDefined();
  });


  it('should call the data service in onInit', () => {
    component.ngOnInit();
    expect(dataService.getData).toHaveBeenCalled();
  });
});
