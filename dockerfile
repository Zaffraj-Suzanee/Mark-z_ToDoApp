# Use official Node image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of files
COPY backend/ ./

# Expose backend port
EXPOSE 5000

# Start server
CMD ["node", "server.js"]