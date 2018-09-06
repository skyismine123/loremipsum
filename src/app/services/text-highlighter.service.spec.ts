import {inject} from '@angular/core/testing';

import {TextHighlighterService} from './text-highlighter.service';

describe('TextHighlighterService', () => {

  const mockHtml = '<p>Lorem ipsum, dolor sit amet?</p>';

  it('should be created', inject([TextHighlighterService], (service: TextHighlighterService) => {
    expect(service).toBeTruthy();
  }));

  it('should highlight letter o with blue color', inject([TextHighlighterService], (service: TextHighlighterService) => {
    expect(service.highlightLetter('o', mockHtml, 'blue'))
      .toBe(`<p>L<span class='my-blue'>o</span>rem ipsum, d<span class='my-blue'>o</span>l<span class='my-blue'>o</span>r sit amet?</p>`);
  }));

  it('should highlight letter r with orange color', inject([TextHighlighterService], (service: TextHighlighterService) => {
    expect(service.highlightLetter('o', mockHtml, 'orange'))
      .toBe(`<p>L<span class='my-orange'>o</span>rem ipsum, d<span class='my-orange'>o</span>l<span class='my-orange'>o</span>r sit amet?</p>`);
  }));
});
