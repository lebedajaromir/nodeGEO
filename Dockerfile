FROM node:10

RUN mkdir -p /nodegeo/node_modules && chown -R node:node /nodegeo
WORKDIR /nodegeo
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node ./src ./src
EXPOSE 3000

CMD [ "node", "src/app.js" ]
