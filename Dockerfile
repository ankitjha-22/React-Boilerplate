# Stage 1: Build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vite app
RUN npm run build

# Stage 2: Serve the application using a simple HTTP server
FROM node:18 AS production

# Install 'serve' to serve the built files
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the build from the first stage
COPY --from=build /app/dist ./dist

# Expose the port to access the app
EXPOSE 5000

# Serve the app using 'serve'
CMD ["serve", "-s", "dist"]
