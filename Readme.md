simple-crud-api

To start work with application please make this steps:
- clone repository to  yout PC;
- switch to branch develop;
 
Application can be run in 2 modes: production or develop. To start application in production mode go into app directory and type command - npm run start:prod. 
Webpack will make a bundle of app wich will be started automatically at localhost(default- 127.0.0.1)at port 3000. To start application in development mode go 
into app directory and type command - npm run start:dev. App will be started automatically at localhost(default- 127.0.0.1)at port 3000. 

To test app your can use postman app

API path /person:

    GET /person or /person/${personId} return all persons or person with corresponding personId
    POST /person is used to create record about new person and store it in database
    PUT /person/${personId} is used to update record about existing person
    DELETE /person/${personId} is used to delete record about existing person from database

Persons are stored as objects that have following properties:

    id — unique identifier (string, uuid) generated on server side
    name — person's name (string, required)
    age — person's age (number, required)
    hobbies — person's hobbies (array of strings or empty array, required)

Requests to non-existing endpoints (e.g. /some-non/existing/resource) handled.
Application handled internal server errors.
Value of port on which application is running is stored in .env file.
