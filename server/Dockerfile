FROM node
WORKDIR /app

COPY package.json ./
RUN npm i

COPY . .
RUN npx prisma generate
RUN npm run-script build 

CMD npx prisma migrate deploy && exec node index.js