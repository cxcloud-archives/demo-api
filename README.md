# CXCloud API Accelerator

[![Build Status](https://travis-ci.org/cxcloud/api-accelerator.svg?branch=master)](https://travis-ci.org/cxcloud/api-accelerator)

This repository uses [CXCloud Core Services](https://github.com/cxcloud/core-services) module and shows off it's capabilities. You can use this as a starting point for your CXCloud projects.

## Configuration

This project uses [`node-config`](lorenwest/node-config) for configuration and [`git-crypt`](AGWA/git-crypt) for encryption of configuration files.

To see the list of available configuration keys, see [CXCloud Core Services](https://github.com/cxcloud/core-services).

After cloning the repo, follow [these instructions](https://github.com/cxcloud/api-accelerator/wiki/GPG-&-Git-Crypt-Installation) to install the required tools and then:

```sh
$ git-crypt unlock
```

Please contact the team to have your public gpg key to the project so you can unlock the configuration files.

## Deploy

This project's master branch is automatically deoployed and is available on [https://demo.cxcloud.xyz/api/](https://demo.cxcloud.xyz/api/).

## REST API Documentation

If you have run the project with a `NODE_ENV` set to any value other than `production`, a Swagger API Documentation will be available under the `/api/v1/api-docs` URL.
