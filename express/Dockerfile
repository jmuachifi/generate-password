# Use an official Node.js runtime as the base image
FROM node:16-slim

# Set environment variables
ENV NODE_ENV=production
ENV DEBUG=express:*

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that your app runs on
EXPOSE 3000

# Command to run your app using npm
CMD ["npm", "start"]
