# CXCloud Facade Demo

This repository uses [CXCloud Facade](https://github.com/cxcloud/cxcloud-facade) module and shows off it's capabilities. You can use this as a starting point for your CXCloud projects.

## Configuration

You need to configure your project with CommerceTools and other 3rd Party client keys and secrets. Eg.:

**`config/development.json`**

``` json
{
  "commerceTools": {
    "projectKey": "YOUR_PROJECT_KEY",
    "clientId": "XXX",
    "clientSecret": "XXX"
  }
}
```

You can add a `json` file for each environment in `config` folder. For example `production.json` etc. The current environment will be fetched using `process.env.NODE_ENV` and the appropriate file will be used.

If a config file for current environment doesn't exist, the `default.json` file will be used instead. Also if a config key doesn't exist in an environment-specific config file, the keys from `default.json` will be used.

Fore more information about the configuration system, please see [`node-config`](https://github.com/lorenwest/node-config) module.

To see the list of available configuration keys, see [CXCloud Facade](https://github.com/cxcloud/cxcloud-facade).

## Deploy

To deploy the project's Docker container to `now` service:

``` sh
$ ENVIRONMENT=production npm run deploy
```

The deployment will be available at: [https://demo.cxcloud.xyz](https://demo.cxcloud.xyz)

## REST API Documentation

If you have run the project with a `NODE_ENV` set to any value other than `production`, a Swagger API Documentation will be available under the `/api/v1/api-docs` URL.
