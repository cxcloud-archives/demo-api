FROM node:8

USER root

WORKDIR /data/cxcloud-facade

COPY src/ /data/cxcloud-facade/src
COPY config/ /data/cxcloud-facade/config
COPY package.json /data/cxcloud-facade/
COPY tsconfig.json /data/cxcloud-facade/
COPY package-lock.json /data/cxcloud-facade/

RUN npm install --silent
RUN npm run build

ENV NODE_ENV production
EXPOSE 4003

CMD ["npm", "run", "start:production"]
