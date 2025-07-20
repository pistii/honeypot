EXPOSE 8080
FROM node:18-alpine
WORKDIR /app
COPY honeypot-server.js .
RUN npm init -y && npm install express
CMD ["node", "honeypot-server.js"]