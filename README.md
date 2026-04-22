# CapMonster Cloud JavaScript SDK

[![npm version](https://img.shields.io/npm/v/%40zennolab_com%2Fcapmonstercloud-client)](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)

Official JavaScript and Node.js SDK for the CapMonster Cloud API.
Use this package when you want to create tasks, poll for results, and integrate CapMonster Cloud from Node.js or browser-based apps.

## Links

- Package: [@zennolab_com/capmonstercloud-client](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)
- Documentation: [docs.capmonster.cloud](https://docs.capmonster.cloud/)
- Dashboard / API key: [dash.capmonster.cloud](https://dash.capmonster.cloud/)

## Installation

```bash
npm i @zennolab_com/capmonstercloud-client
```

Need to test before depositing? Contact support and we’ll add trial credits to your account.

## Minimal example (Node.js / TypeScript)

```javascript
const { CapMonsterCloudClientFactory, ClientOptions, RecaptchaV2Request } = require('@zennolab_com/capmonstercloud-client');

async function run() {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));
  console.log(await cmcClient.getBalance());

  const recaptchaV2Request = new RecaptchaV2Request({
    websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
  });

  console.log(await cmcClient.Solve(recaptchaV2Request));
}

run()
  .then(() => {
    console.log('DONE');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```

Supported task families include reCAPTCHA, GeeTest, Turnstile, image-to-text, and additional task types documented in the public docs.

## Usage with Browser (with or without Typescript)

Browser implementation use [fetch](https://caniuse.com/fetch) instead of [http(s)](https://nodejs.org/api/http.html).
For browser usage you need some Module Bundler (e.g. [Webpack](https://webpack.js.org/)).

```javascript
import { CapMonsterCloudClientFactory, ClientOptions, RecaptchaV2Request } from '@zennolab_com/capmonstercloud-client';

document.addEventListener('DOMContentLoaded', async () => {
  const cmcClient = CapMonsterCloudClientFactory.Create(new ClientOptions({ clientKey: '<your capmonster.cloud API key>' }));
  console.log(await cmcClient.getBalance());

  const recaptchaV2Request = new RecaptchaV2Request({
    websiteURL: 'https://lessons.zennolab.com/captchas/recaptcha/v2_simple.php?level=high',
    websiteKey: '6Lcg7CMUAAAAANphynKgn9YAgA4tQ2KI_iqRyTwd',
    proxy: {
      proxyType: 'http',
      proxyAddress: '8.8.8.8',
      proxyPort: 8080,
      proxyLogin: 'proxyLoginHere',
      proxyPassword: 'proxyPasswordHere',
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.132 Safari/537.36',
  });

  console.log(await cmcClient.Solve(recaptchaV2Request));
});
```

## Debug

For debugging set `DEBUG` environmental variable to one of [possible values](/src/Logger.ts) (see [debug module](https://www.npmjs.com/package/debug))

```bash
DEBUG=cmc-* node app.js
```

## Supported request classes

- [AltchaRequest](https://docs.capmonster.cloud/docs/captchas/altcha-task)
- [AmazonRequest](https://docs.capmonster.cloud/docs/captchas/amazon-task)
- [BasiliskRequest](https://docs.capmonster.cloud/docs/captchas/Basilisk-task)
- [BinanceRequest](https://docs.capmonster.cloud/docs/captchas/binance)
- [CastleRequest](https://docs.capmonster.cloud/docs/captchas/castle-task)
- [ComplexImageFunCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/ComplexImageTask-Recognition)
- [ComplexImageRecaptchaRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-click)
- [ComplexImageTaskRecognitionRequest](https://docs.capmonster.cloud/docs/captchas/ComplexImageTask-Recognition)
- [DataDomeRequest](https://docs.capmonster.cloud/docs/captchas/datadome)
- [FunCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/funcaptcha-task)
- [GeeTestRequest](https://docs.capmonster.cloud/docs/captchas/geetest-task)
- [HuntRequest](https://docs.capmonster.cloud/docs/captchas/hunt-task)
- [ImageToTextRequest](https://docs.capmonster.cloud/docs/captchas/image-to-text)
- [ImpervaRequest](https://docs.capmonster.cloud/docs/captchas/incapsula)
- [MTCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/mtcaptcha-task)
- [ProsopoRequest](https://docs.capmonster.cloud/docs/captchas/prosopo-task)
- [RecaptchaV2EnterpriseRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v2-enterprise-task)
- [RecaptchaV2Request](https://docs.capmonster.cloud/docs/captchas/no-captcha-task)
- [RecaptchaV3EnterpriseRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v3-enterprise-task)
- [RecaptchaV3ProxylessRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v3-task)
- [TSPDRequest](https://docs.capmonster.cloud/docs/captchas/tspd-task)
- [TemuRequest](https://docs.capmonster.cloud/docs/captchas/temu-task)
- [TenDIRequest](https://docs.capmonster.cloud/docs/captchas/tendi)
- [TurnstileRequest](https://docs.capmonster.cloud/docs/captchas/turnstile-task)
- [YidunRequest](https://docs.capmonster.cloud/docs/captchas/yidun-task)
