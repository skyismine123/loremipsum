import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextHighlighterComponent } from './text-highlighter.component';

describe('TextHighlighterComponent', () => {
  let component: TextHighlighterComponent;
  let fixture: ComponentFixture<TextHighlighterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextHighlighterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextHighlighterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
