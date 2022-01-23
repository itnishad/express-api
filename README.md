#NodeJS + MongoDB + Docker CRUD API

This is boilerplate express app with docker and mongo configured.

The app contains barebones CRUD methods on a single module - Car.

Project Setup

1. Install Docker and Docker-Compose. Read docker docs.
2. Create a docker network. docker network create your-network-name
3. Fork this repo.
4. Copv .env.example to .env. Update network name
5. Run docker-compose up to run.

Learning Milestones


Before you begin

For every milestone (except #0), create a seperate branch. Once completed merge that branch to your master.

Create Postman Collection


Create a postman project for this app. Then create a collection 'CAR'. Add and try out all requests on car module. While doing this keep an eye on module folder structure and model document structure.

Add Validation


Add Validation Middleware. You can use npm packages as well. Make to return 400 status on errors with a json payload like this - { "message": "error-reason-description" }

Add Authentication


Use JWT tokens for authorization. You can look into passport based solutions.

Understand what consists of JWT payload and JWT limitations,

Only create 'login' and 'register' routes.

### 2.1 Make Car Module Routes Protected

Unauthorized access should return response status 400 and a json payload.

Error Handling


Create MongoValidationError and CarNotFoundError for car module.

Create middlewares to handle these errors.
