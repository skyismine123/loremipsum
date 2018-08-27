import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TextHighlighterComponent} from './components/text-highlighter/text-highlighter.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {InterceptorService} from './services/interceptor/interceptor.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TextHighlighterComponent
      ],
      imports: [
      BrowserModule,
      HttpClientModule
    ],
      providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
      },
    ],
    }).compileComponents();
  }));
  it('Should have title "lorem-ipsum"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lorem-ipsum');
  }));
});
