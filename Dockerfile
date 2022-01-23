# create a file named Dockerfile
FROM node:10-alpine
WORKDIR /app
CMD ["npm", "start"]