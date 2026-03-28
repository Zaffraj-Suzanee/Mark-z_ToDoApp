# Use official Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy rest of files
COPY backend/ ./
COPY src/ ./src/

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]