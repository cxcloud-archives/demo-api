FROM node:8

USER root

WORKDIR /data/cxcloud-facade

COPY src/ /data/cxcloud-facade/src
COPY config/ /data/cxcloud-facade/config
COPY package.json /data/cxcloud-facade/
COPY tsconfig.json /data/cxcloud-facade/
COPY package-lock.json /data/cxcloud-facade/

ENV NPM_CONFIG_REGISTRY=https://npm-proxy.fury.io/wSnsDT8KtqyisU81uTpv/cxcloud/
RUN npm install --silent
RUN npm run build

ENV NODE_ENV production
EXPOSE 4003

CMD ["npm", "run", "start:production"]
