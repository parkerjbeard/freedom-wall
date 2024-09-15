# docker/backend.Dockerfile

# Use the official Node.js 18 image as the base
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 5000

# Start the server
CMD ["npm", "run", "dev"]
