# Use Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install tsconfig-paths
RUN npm install tsconfig-paths

# Expose the port the app runs on
EXPOSE 9000

# Command to run the app
CMD ["npx", "ts-node", "-r", "tsconfig-paths/register", "src/index.ts"]