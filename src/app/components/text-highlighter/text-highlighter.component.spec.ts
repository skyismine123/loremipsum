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
  const mockHtml = '<p>Lorem ipsum, dolor sit amet?</p>';
  const mockHtmlForSorting = '<h1>lorem ipsum</h1><p>Lorem ipsum dolor sit amet</p>';

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

  it('should clear interpunctions', () => {
    expect(component.clearInterpunctions(mockHtml))
      .toBe('<p>Lorem ipsum dolor sit amet</p>');
  });

  it('should highlight letter o with blue color', () => {
    expect(component.highlightLetter('o', mockHtml, 'blue'))
      .toBe(`<p>L<span class='my-blue'>o</span>rem ipsum, d<span class='my-blue'>o</span>l<span class='my-blue'>o</span>r sit amet?</p>`);
  });

  it('should highlight letter r with orange color', () => {
    expect(component.highlightLetter('o', mockHtml, 'orange'))
      .toBe(`<p>L<span class='my-orange'>o</span>rem ipsum, d<span class='my-orange'>o</span>l<span class='my-orange'>o</span>r sit amet?</p>`);
  });

  it('should sort words in paragraphs', () => {
    expect(component.sortWordsInParagraphs(mockHtmlForSorting))
      .toBe(`<h1>lorem ipsum</h1><p>amet dolor ipsum Lorem sit</p>`);
  });

  it('should do all three transformation properly onInit', () => {
    component.ngOnInit();
    expect(component.htmlContent).toBe(`<p>adipiscing amet c<span class='my-blue'>o</span>nsectetu<span class='my-orange'>r</span> d<span class='my-blue'>o</span>l<span class='my-blue'>o</span><span class='my-orange'>r</span> elit ipsum L<span class='my-blue'>o</span><span class='my-orange'>r</span>em sit</p>`);
  });
});
