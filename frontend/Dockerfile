FROM node:14
WORKDIR "/app"
COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./public ./public
COPY ./src ./src
RUN npm install
CMD ["npm", "run", "start"]