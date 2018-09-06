import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextHighlighterService {

  constructor() { }

  /**
   * Method which highlights the letter provided.
   * @param {string} letterToHighlight
   * @param {string} content
   * @param {string} color
   * @returns {string}
   */
  highlightLetter(letterToHighlight: string, content: string, color: string) {
    const regex = new RegExp(letterToHighlight, 'gi');
    return content.replace(regex, (letter: string) => {
        return `<span class='my-${color}'>${letter}</span>`;
      }
    );
  }
}
