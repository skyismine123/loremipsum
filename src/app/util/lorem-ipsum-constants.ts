/**
 * A class used for reading string constants.
 * @class  LoremIpsumConstants
 *
 */
export class LoremIpsumConstants {
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
}
