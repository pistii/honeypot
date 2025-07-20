FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm init -y && npm install express
CMD ["npm", "start"]