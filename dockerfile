FROM node:16

WORKDIR /usr/src

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080

RUN npx prisma generate
# CMD [ "../ts-node", "server.ts" ]
CMD [ "npm", "start" ]