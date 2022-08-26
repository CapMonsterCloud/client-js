import { CaptchaRequestBase } from './CaptchaRequestBase';

/**
 * Base HCaptcha recognition request
 */
export abstract class HCaptchaRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with hCaptcha.
   */
  public websiteURL!: string;

  /**
   * hCaptcha website key.
   */
  public websiteKey!: string;

  /**
   * Set true for invisible version of hCaptcha
   */
  public isInvisible?: boolean;

  /**
   * Custom data that is used in some implementations of hCaptcha, mostly with @type {Invisible}=true.
   * In most cases you see it as <![CDATA[rqdata]]> inside network requests.
   * IMPORTANT: you MUST provide @type {UserAgent} if you submit captcha with data parameter.
   * The value should match the User-Agent you use when interacting with the target website.
   */
  public data?: string;

  /**
   * Browser's User-Agent which is used in emulation.
   * It is required that you use a signature of a modern browser.
   */
  public userAgent?: string;

  /**
   * Additional cookies which we must use during interaction with target page.
   */
  public cookies?: string;
}
