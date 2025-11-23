FROM node:18

# Create app directory
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./

RUN npm install --only=production

# Copy all source files
COPY . .

# Expose the port Render will use
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]
