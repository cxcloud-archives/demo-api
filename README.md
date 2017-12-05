# CXCloud API Accelerator

This repository uses [CXCloud Core Services](https://github.com/cxcloud/core-services) module and shows off it's capabilities. You can use this as a starting point for your CXCloud projects.

## Configuration

This project uses [`node-config`](lorenwest/node-config) for configuration and [`git-crypt`](AGWA/git-crypt) for encryption of configuration files.

To see the list of available configuration keys, see [CXCloud Core Services](https://github.com/cxcloud/core-services).

## Deploy

This project's master branch is automatically deoployed and is available on [https://demo.cxcloud.xyz/api/](https://demo.cxcloud.xyz/api/). However to deploy the project's Docker container manually to `now` service:

``` sh
$ ENVIRONMENT=production npm run deploy -- --token=YOUR_NOW_TOKEN
```

## REST API Documentation

If you have run the project with a `NODE_ENV` set to any value other than `production`, a Swagger API Documentation will be available under the `/api/v1/api-docs` URL.
