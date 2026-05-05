✅ CapMonster.Cloud — Fast, Reliable CAPTCHA Solving for Automation & Scraping

[![CapMonster Cloud](https://help.zennolab.com/upload/u/e4/e4bc15839b25.png)](https://capmonster.cloud/en/?utm_source=github&utm_campaign=cmcrep)

# CapMonster Cloud JavaScript SDK

[![npm version](https://img.shields.io/npm/v/%40zennolab_com%2Fcapmonstercloud-client)](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)

Official JavaScript and Node.js SDK for the CapMonster Cloud API.
Use this package when you want to create tasks, poll for results, and integrate CapMonster Cloud from Node.js or browser-based apps.

## Links

- Package: [@zennolab_com/capmonstercloud-client](https://www.npmjs.com/package/@zennolab_com/capmonstercloud-client)
- Documentation: [docs.capmonster.cloud](https://docs.capmonster.cloud/?utm_source=github&utm_campaign=cmcrep)
- Dashboard / API key: [dash.capmonster.cloud](https://dash.capmonster.cloud/?utm_source=github&utm_campaign=cmcrep)

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

- [AltchaRequest](https://docs.capmonster.cloud/docs/captchas/altcha-task?utm_source=github&utm_campaign=cmcrep)
- [AmazonRequest](https://docs.capmonster.cloud/docs/captchas/amazon-task?utm_source=github&utm_campaign=cmcrep)
- [BasiliskRequest](https://docs.capmonster.cloud/docs/captchas/Basilisk-task?utm_source=github&utm_campaign=cmcrep)
- [BinanceRequest](https://docs.capmonster.cloud/docs/captchas/binance?utm_source=github&utm_campaign=cmcrep)
- [CastleRequest](https://docs.capmonster.cloud/docs/captchas/castle-task?utm_source=github&utm_campaign=cmcrep)
- [ComplexImageFunCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/ComplexImageTask-Recognition?utm_source=github&utm_campaign=cmcrep)
- [ComplexImageRecaptchaRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-click?utm_source=github&utm_campaign=cmcrep)
- [ComplexImageTaskRecognitionRequest](https://docs.capmonster.cloud/docs/captchas/ComplexImageTask-Recognition?utm_source=github&utm_campaign=cmcrep)
- [DataDomeRequest](https://docs.capmonster.cloud/docs/captchas/datadome?utm_source=github&utm_campaign=cmcrep)
- [FunCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/funcaptcha-task?utm_source=github&utm_campaign=cmcrep)
- [GeeTestRequest](https://docs.capmonster.cloud/docs/captchas/geetest-task?utm_source=github&utm_campaign=cmcrep)
- [HuntRequest](https://docs.capmonster.cloud/docs/captchas/hunt-task?utm_source=github&utm_campaign=cmcrep)
- [ImageToTextRequest](https://docs.capmonster.cloud/docs/captchas/image-to-text?utm_source=github&utm_campaign=cmcrep)
- [ImpervaRequest](https://docs.capmonster.cloud/docs/captchas/incapsula?utm_source=github&utm_campaign=cmcrep)
- [MTCaptchaRequest](https://docs.capmonster.cloud/docs/captchas/mtcaptcha-task?utm_source=github&utm_campaign=cmcrep)
- [ProsopoRequest](https://docs.capmonster.cloud/docs/captchas/prosopo-task?utm_source=github&utm_campaign=cmcrep)
- [RecaptchaV2EnterpriseRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v2-enterprise-task?utm_source=github&utm_campaign=cmcrep)
- [RecaptchaV2Request](https://docs.capmonster.cloud/docs/captchas/no-captcha-task?utm_source=github&utm_campaign=cmcrep)
- [RecaptchaV3EnterpriseRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v3-enterprise-task?utm_source=github&utm_campaign=cmcrep)
- [RecaptchaV3ProxylessRequest](https://docs.capmonster.cloud/docs/captchas/recaptcha-v3-task?utm_source=github&utm_campaign=cmcrep)
- [TSPDRequest](https://docs.capmonster.cloud/docs/captchas/tspd-task?utm_source=github&utm_campaign=cmcrep)
- [TemuRequest](https://docs.capmonster.cloud/docs/captchas/temu-task?utm_source=github&utm_campaign=cmcrep)
- [TenDIRequest](https://docs.capmonster.cloud/docs/captchas/tendi?utm_source=github&utm_campaign=cmcrep)
- [TurnstileRequest](https://docs.capmonster.cloud/docs/captchas/turnstile-task?utm_source=github&utm_campaign=cmcrep)
- [YidunRequest](https://docs.capmonster.cloud/docs/captchas/yidun-task?utm_source=github&utm_campaign=cmcrep)

:star:️ If you find this project useful, please give it a star on GitHub!
