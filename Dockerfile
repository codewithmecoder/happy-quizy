FROM node:18

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

COPY prisma/schema.prisma ./prisma/
RUN npx prisma generate

COPY . .

RUN yarn build

EXPOSE 1333
ENV PORT=1333 
CMD [ "yarn", "start" ]