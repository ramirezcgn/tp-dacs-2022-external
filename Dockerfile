FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 4000
EXPOSE 9230

VOLUME ["./src:/usr/src/app/src", "./db:/usr/src/app/db"]

CMD [ "npm", "run", "start" ]
