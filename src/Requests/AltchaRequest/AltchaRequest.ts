import { TaskType } from '../../TaskType';
import { AltchaRequestBase, AltchaRequestBaseIn } from './AltchaRequestBase';
import { ProxyInfo, ProxyInfoIn } from '../ProxyInfo';

export type AltchaRequestIn = Pick<AltchaRequestBaseIn, Exclude<keyof AltchaRequestBaseIn, 'type' | '_class'>> & {
  proxy?: ProxyInfoIn;
};
/**
 * DataDome recognition request.
 * {@link https://zenno.link/doc-altcha}
 */
export class AltchaRequest extends AltchaRequestBase {
  constructor({ proxy, ...argsObj }: AltchaRequestIn) {
    super({ type: TaskType.CustomTask, _class: 'altcha', ...argsObj });

    if (proxy) {
      Object.assign(this, new ProxyInfo(proxy));
    }
  }
}
