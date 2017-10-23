FROM node:8

USER root
WORKDIR /data/cxcloud-facade
ENV NODE_ENV production

COPY dist/ /data/cxcloud-facade/dist
COPY config/ /data/cxcloud-facade/config
COPY node_modules/ /data/cxcloud-facade/node_modules
COPY package.json /data/cxcloud-facade/

EXPOSE 4003

CMD ["npm", "run", "start:production"]
