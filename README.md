## Requirements:
You are required to develop a RESTful API that allows users to create, retrieve, update, and delete data on a PostgreSQL database. The API should be developed using Typescript and Node.JS, and should conform to the following specifications:
1. The API should support CRUD (Create, Read, Update, and Delete) operations for a single resource - User.
   - A User resource should have the following attributes:
      - id: unique identifier for the user (string or UUID) :white_check_mark:
      - name: user's name (string) :white_check_mark:
      - email: user's email address (string) :white_check_mark:
      - password: user's password (string) :white_check_mark:
1. The API should handle input validation and provide appropriate error messages for invalid inputs. :white_check_mark:
1. The API should be secured using JWT authentication. :white_check_mark:


1. The API should be well documented with clear instructions on how to run the code and test the API.

## Stack

- NodeJS
- Express.js
- TypeScript
- TypeORM 
- PostgreSQL



## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- PostgreSQL (or any other compatible relational database)

## Getting Started

- Clone or download the project

## Set up your database:

- Create a PostgreSQL database named userdb.
- Update the database connection configuration in src/ormconfig.json to match your database settings.


- Navigate to the project directory: and run npm i in the project root folder
- Run npm run start 



## Create User

- URL: /users
- Method: POST
- Request Body: JSON object representing the user to be created. 





<img width="848" alt="c" src="https://github.com/Syedateeq160/user-crud/assets/32579549/ec616ad6-fc60-4443-a131-a4175d18e041">



## Get User
Retrieve a user by ID.

- URL: /users/:id
- Method: GET
- URL Parameters: id (number) - The ID of the user to retrieve.

## Success Response:
- Code: 200 OK
- Content: JSON object representing the user.



<img width="837" alt="g" src="https://github.com/Syedateeq160/user-crud/assets/32579549/7458e0ff-b756-4822-a2b3-2f533e7b304f">


## Update User

- URL: /users/:id
- Method: PUT
- URL Parameters: id (number) - The ID of the user to be updated.
- Request Body: JSON object representing the updated user properties. 




<img width="845" alt="u" src="https://github.com/Syedateeq160/user-crud/assets/32579549/8eee37d0-dbea-4fd5-91bc-ef84afe56e38">

## Delete User

## Delete an existing user by ID.

- URL: /users/:id
- Method: DELETE
- URL Parameters: id (number) - The ID of the user to be deleted.

##Success Response:

- Code: 204 No Content

##Error Response:
- Code: 400 Bad Request
- Content: JSON object with an error message





<img width="839" alt="d" src="https://github.com/Syedateeq160/user-crud/assets/32579549/1a695fb0-4906-4ca0-81d9-9780c34dd446">


