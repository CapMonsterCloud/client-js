import { FunCaptchaRequest } from './FunCaptchaRequest';
import { GeeTestRequest } from './GeeTestRequest';
import { HCaptchaRequest } from './HCaptchaRequest';
import { ImageToTextRequest } from './ImageToTextRequest';
import { RecaptchaV2EnterpriseRequest } from './RecaptchaV2EnterpriseRequest';
import { RecaptchaV2Request } from './RecaptchaV2Request';
import { RecaptchaV3ProxylessRequest } from './RecaptchaV3ProxylessRequest';
import { ComplexImageHCaptchaRequest } from './ComplexImageHCaptchaRequest';
import { ComplexImageRecaptchaRequest } from './ComplexImageRecaptchaRequest';
import { ComplexImageFunCaptchaRequest } from './ComplexImageFunCaptchaRequest';
import { DataDomeRequest } from './DataDomeRequest';
import { TenDIRequest } from './TenDIRequest';
import { BasiliskRequest } from './BasiliskRequest';
import { ImpervaRequest } from './ImpervaRequest';
import { BinanceRequest } from './BinanceRequest';
import { ComplexImageTaskRecognitionRequest } from './ComplexImageTaskRecognitionRequest';
import { AmazonRequest } from './AmazonRequest';
import { TurnstileRequest } from './TurnstileRequest';
import { ProsopoRequest } from './ProsopoRequest';
import { TemuRequest } from './TemuRequest';
import { YidunRequest } from './YidunRequest';
import { MTCaptchaRequest } from './MTCaptchaRequest';
import { CastleRequest } from './CastleRequest';
import { HuntRequest } from './HuntRequest';
import { TSPDRequest } from './TSPDRequest';

/**
 * Universal type for recognition request
 */
export type Task =
  | FunCaptchaRequest
  | GeeTestRequest
  | HCaptchaRequest
  | ImageToTextRequest
  | RecaptchaV2EnterpriseRequest
  | RecaptchaV2Request
  | RecaptchaV3ProxylessRequest
  | ComplexImageHCaptchaRequest
  | ComplexImageRecaptchaRequest
  | ComplexImageFunCaptchaRequest
  | TurnstileRequest
  | DataDomeRequest
  | TenDIRequest
  | BasiliskRequest
  | ImpervaRequest
  | BinanceRequest
  | ComplexImageTaskRecognitionRequest
  | AmazonRequest
  | ProsopoRequest
  | TemuRequest
  | YidunRequest
  | MTCaptchaRequest
  | CastleRequest
  | TSPDRequest
  | HuntRequest;
