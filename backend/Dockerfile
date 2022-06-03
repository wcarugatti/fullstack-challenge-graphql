FROM node:14
WORKDIR "/app"
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./src ./src
RUN npm install --production
RUN npm install -g typescript
RUN tsc
CMD ["node", "./dist/server.js"]