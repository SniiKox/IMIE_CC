FROM node:alpine

# instal yarn
RUN apk -q add yarn

# Go to user home
WORKDIR /home/tcgdex

COPY . .

RUN yarn && yarn build

CMD ["yarn", "start"]
