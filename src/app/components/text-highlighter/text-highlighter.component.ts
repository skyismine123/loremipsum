import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {LoremIpsumConstants} from '../../util/lorem-ipsum-constants';
import {TextHighlighterService} from '../../services/text-highlighter.service';

/**
 * A class representing a ui component for showing data from service.
 * @class  TextHighlighterComponent
 * @constructor
 *
 * @param {DataService} dataService
 *   Instance of DataService for calling backend.
 *
 */
@Component({
  selector: 'app-text-highlighter',
  templateUrl: './text-highlighter.component.html',
  styleUrls: ['./text-highlighter.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextHighlighterComponent implements OnInit, OnDestroy {

  /**
   * @type string htmlContent
   * Html content.
   */
  htmlContent: string;

  /**
   * @type {boolean} errorHappened
   * Error flag.
   */
  errorHappened = false;

  /**
   * @type string location
   * Location of html file.
   */
  private readonly location: string = 'assets/lorem.html';

  /**
   * @type Subject unSubscribe
   * UnSubscription subject.
   */
  private unSubscribe: Subject<void> = new Subject<void>();

  constructor(private dataService: DataService, private textHighlighterService: TextHighlighterService) {
  }

  ngOnInit() {
    /**
     * Getting and manipulation of the file loaded from service.
     */
    this.dataService.getData(this.location)
      .pipe(
        takeUntil(this.unSubscribe)
      )
      .subscribe((response) => {
        this.htmlContent = response;

        this.htmlContent = this.clearInterpunctions(this.htmlContent);
        this.htmlContent = this.sortWordsInParagraphs(this.htmlContent);
        this.htmlContent = this.textHighlighterService.highlightLetter(LoremIpsumConstants.LETTER_O, this.htmlContent, LoremIpsumConstants.BLUE_COLOR);
        this.htmlContent = this.textHighlighterService.highlightLetter(LoremIpsumConstants.LETTER_R, this.htmlContent, LoremIpsumConstants.ORANGE_COLOR);
      }, () => {
        this.errorHappened = true;
      });
  }

  /**
   * Method which clears interpunction symbols.
   * @param {string} content
   * @returns {string}
   */
  clearInterpunctions(content: string): string {
    return content.replace(LoremIpsumConstants.SORT_WORDS_REGEX, (paragraphContent: string) => {
      return paragraphContent.replace(LoremIpsumConstants.CLEAR_INTERPUNCTION_REGEX, LoremIpsumConstants.EMPTY_STRING);
    });
  }

  /**
   * Method which is sorting all the words in paragraph alphabetically.
   * @param {string} content
   * @returns {string}
   */
  sortWordsInParagraphs(content: string): string {
    return content.replace(LoremIpsumConstants.SORT_WORDS_REGEX, (paragraphContent: string, firstGroup: string) => {
      const sortedArray = firstGroup.split(LoremIpsumConstants.SPACE).sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
      });
      const sortedParagraph = sortedArray.join(LoremIpsumConstants.SPACE);
      return `<p>${sortedParagraph}</p>`;
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
