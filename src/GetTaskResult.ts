import { ErrorType } from './ErrorType';
import { FunCaptchaResponse } from './Responses/FunCaptchaResponse';
import { GeeTestResponse } from './Responses/GeeTestResponse';
import { ImageToTextResponse } from './Responses/ImageToTextResponse';
import { RecaptchaV2EnterpriseResponse } from './Responses/RecaptchaV2EnterpriseResponse';
import { RecaptchaV2Response } from './Responses/RecaptchaV2Response';
import { RecaptchaV3Response } from './Responses/RecaptchaV3Response';
import { ComplexImageResponse } from './Responses/ComplexImageResponse';
import { DataDomeResponse } from './Responses/DataDomeResponse';
import { TenDIResponse } from './Responses/TenDIResponse';
import { AmazonResponse } from './Responses/AmazonResponse';
import { BasiliskResponse } from './Responses/BasiliskResponse';
import { ImpervaResponse } from './Responses/ImpervaResponse';
import { BinanceResponse } from './Responses/BinanceResponse';
import { ComplexImageRecognitionResponse } from './Responses/ComplexImageRecognitionResponse';
import { AltchaResponse } from './Responses/AltchaResponse';
import { CastleResponse } from './Responses/CastleResponse';
import { TSPDResponse } from './Responses/TSPDResponse';
import { HuntResponse } from './Responses/HuntResponse';

export enum TaskResultType {
  Failed = 'Failed',
  Completed = 'Completed',
  InProgress = 'InProgress',
}

export type TaskInProgress = {
  type: TaskResultType.InProgress;
};

export type TaskFailed = {
  type: TaskResultType.Failed;
  error: ErrorType;
};

export type TaskCompletedSolution =
  | FunCaptchaResponse
  | GeeTestResponse
  | ImageToTextResponse
  | RecaptchaV2EnterpriseResponse
  | RecaptchaV2Response
  | RecaptchaV3Response
  | ComplexImageResponse
  | DataDomeResponse
  | TenDIResponse
  | AmazonResponse
  | BasiliskResponse
  | ImpervaResponse
  | BinanceResponse
  | ComplexImageRecognitionResponse
  | AltchaResponse
  | CastleResponse
  | TSPDResponse
  | HuntResponse;

export type TaskCompleted<S extends TaskCompletedSolution> = {
  type: TaskResultType.Completed;
  solution: S;
};

export type TaskResult<S extends TaskCompletedSolution> = TaskInProgress | TaskFailed | TaskCompleted<S>;

export enum TaskResultStatus {
  processing = 'processing',
  ready = 'ready',
}

export type GetTaskResultResponse<S extends TaskCompletedSolution> = {
  errorId: number;
  errorCode: string;
  errorDescription: string | null;
  status: TaskResultStatus;
  solution: S | null;
};

export class GetTaskResultError extends Error {
  constructor(public errorType: ErrorType) {
    super(`Cannot create task. Error was ${errorType}`);
  }
}
