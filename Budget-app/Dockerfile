# Use an official Node.js runtime as a parent image with a specific version
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install app dependencies, including dev dependencies
RUN npm install

# Copy the local files to the container
COPY . .

# Expose port 3000 for development server
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
