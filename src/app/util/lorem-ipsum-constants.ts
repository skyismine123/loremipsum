/**
 * A class used for reading string constants.
 * @class  LoremIpsumConstants
 *
 */
export class LoremIpsumConstants {


  /**
   * Empty string constant.
   * @type {string}
   */
  public static readonly EMPTY_STRING: string = '';

  /**
   * Space string constant.
   * @type {string}
   */
  public static readonly SPACE: string = ' ';

  /**
   * Blue color string constant.
   * @type {string}
   */
  public static readonly BLUE_COLOR: string = 'blue';

  /**
   * Orange color string constant.
   * @type {string}
   */
  public static readonly ORANGE_COLOR: string = 'orange';

  /**
   * Letter 'o' string constant.
   * @type {string}
   */
  public static readonly LETTER_O: string = 'o';

  /**
   * Letter 'r' string constant.
   * @type {string}
   */
  public static readonly LETTER_R: string = 'r';

  /**
   * Request start string constant.
   * @type {string}
   */
  public static readonly REQUEST_STRING_START: string = '----Request----';

  /**
   * Request end string constant.
   * @type {string}
   */
  public static readonly REQUEST_STRING_END: string = '----End of Request----';

  /**
   * Error occured string constant.
   * @type {string}
   */
  public static readonly ERROR_OCCURED_STRING: string = 'An error occurred';

  /**
   * Backend error status string constant.
   * @type {string}
   */
  public static readonly BACKEND_ERROR_STATUS_STRING: string = 'Backend error status:';

  /**
   * Backend error body string constant.
   * @type {string}
   */
  public static readonly BACKEND_ERROR_BODY_STRING: string = 'Backend error body:';

  /**
   * Regex for clearing interpunctions.
   * @type {RegExp}
   */
  public static readonly CLEAR_INTERPUNCTION_REGEX: RegExp = new RegExp(/[.,;:\?]/g);

  /**
   * Regex for clearing interpunctions.
   * @type {RegExp}
   */
  public static readonly SORT_WORDS_REGEX: RegExp = new RegExp(/<p>(.*?)<\/p>/g);
}
