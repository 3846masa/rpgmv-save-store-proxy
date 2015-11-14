FROM node:4-wheezy

ADD . /app/

RUN cd /app/ && \
    npm install --production

ENV PORT 3000
ENV NODE_ENV production

EXPOSE 3000

WORKDIR /app

CMD ["npm", "start"]
