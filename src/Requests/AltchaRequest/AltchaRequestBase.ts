import { CaptchaRequestBase, CaptchaRequestBaseIn } from '../CaptchaRequestBase';

export type AltchaRequestBaseIn = {
  websiteURL: string;
  userAgent?: string;
  _class: string;
  metadata: Metadata;
} & CaptchaRequestBaseIn;

export type Metadata = {
  challenge: string;
  iterations: string;
  salt: string;
  signature: string;
};

/**
 * Base Altcha recognition request
 */
export abstract class AltchaRequestBase extends CaptchaRequestBase {
  /**
   * Address of a webpage with DataDome.
   */
  public websiteURL!: string;

  /**
   * Altcha website key.
   */
  public websiteKey!: string;

  /**
   * The object that contains additional data about the captcha - challenge, iterations, salt, signature
   */
  public metadata!: Metadata;

  /**
   * Browser User-Agent. Pass only the actual UA from Windows OS
   */
  public userAgent?: string;

  /**
   * Class of captcha object
   */
  public class: string;

  constructor({ type, nocache, websiteURL, userAgent, metadata, _class }: AltchaRequestBaseIn) {
    super({ type, nocache });
    this.websiteURL = websiteURL;
    this.metadata = metadata;
    this.userAgent = userAgent;
    this.class = _class;
  }
}
