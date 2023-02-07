### Movie Rest API - Demo

Thank you for checking out what I can do with NodeJS. This is just an example application.

## Special Features

### In this application you will find these features:

| Feature          | Description                                      |
| :--------------- | :----------------------------------------------- |
| Express          | API Routing                                      |
| Swagger          | OpenAPI 3.0 Standard API Route Documentation     |
| TypeScript       | Coded in TypeScript                              |
| AWS RDS          | Using AWS Relational Database Service (Postgres) |
| PG-Promise       | PostgreSQL Interface for NodeJS                  |
| Morgan           | Logging                                          |
| Helmet / Cors    | Security                                         |
| Jest Testing     | Todo                                             |
| Handlebars       | Todo                                             |
| Token Based Auth | Todo                                             |

## Database Model

[Modeled database using Oracle SQL Developer Data Modeler](https://www.oracle.com/database/sqldeveloper/technologies/sql-data-modeler/#:~:text=Oracle%20SQL%20Developer%20Data%20Modeler%20is%20a%20free%20graphical%20tool,dimensional%2C%20and%20data%20type%20models.)

![Movies REST API - Databasee](https://github.com/anthonygcamacho/movies-rest-api/blob/main/data-model.png?raw=true)

## PG-Promise Cheatsheet

### Common Methods

[DB Methods](https://vitaly-t.github.io/pg-promise/Database.html)

| Method      | Description                                                                                                                                            |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| any         | Executes a query that can return any number of rows. This is simply a shorter alias for method manyOrNone.                                             |
| many        | Executes a query that expects one or more rows to be returned. When the query returns no rows, the method rejects.                                     |
| manyOrNone  | Executes a query that can return any number of rows.                                                                                                   |
| multi       | Executes a multi-query string, without any expectation for the return data, and resolves with an array of arrays of rows when successful.              |
| multiResult | Executes a multi-query string, without any expectation for the return data, and resolves with an array of the original Result objects when successful. |
| none        | Executes a query that expects no data to be returned. If the query returns any data, the method rejects.                                               |
| one         | Executes a query that expects exactly 1 row to be returned. When 0 or more than 1 rows are returned, the method rejects.                               |
| oneOrNone   | Executes a query that expects 0 or 1 rows to be returned. When the query returns more than 1 row, the method rejects.                                  |
| query       | Base query method that executes a generic query, expecting the return data according to parameter qrm.                                                 |
| result      | Executes a query without any expectation for the return data, and resolves with the original Result object when successful.                            |

## SQL Cheatsheet

### Common Data Types

| Data Type          | Description                                  | Example                     |
| :----------------- | :------------------------------------------- | :-------------------------- |
| SERIAL PRIMARY KEY | auto incrementing whole number               | id (primary key)            |
| REFERENCES         | foreign key                                  | relationship to other table |
| INT                | whole numbers                                | age, quantity               |
| NUMERIC(P,S)       | decimal numbers                              | height, price               |
| CHAR(N)            | fixed length string of length N              | gender, state               |
| VARCHAR(N)         | varying length string of maximum length N    | name, email                 |
| TEXT               | varying length string with no maximum length | comments, reviews           |
| TIME               | hh:mm:ss                                     |                             |
| DATE               | yyyy-mm-dd                                   | date of birth               |
| TIMESTAMP          | yyyy-mm-dd hh:mm:ss                          | order time                  |
| BOOLEAN            | true or false                                | in stock                    |
| ENUM               | list of values input by the user             | gender                      |

### Contraints

| Contraint | Description                          | Example                    |
| :-------- | :----------------------------------- | :------------------------- |
| UNIQUE    | value must be unique across all rows | email address              |
| NOT NULL  | value cannot be empty                | password                   |
| CHECK     | creates a condition                  | between two dates, > value |

## Common Status Codes

| Code | Description           |
| :--- | :-------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 301  | Moved Permantly       |
| 304  | Not Modified          |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 402  | Payment Required      |
| 403  | Forbidden             |
| 404  | No Found              |
| 409  | Conflict              |
| 500  | Internal Server Error |
| 502  | Bad Gateway           |
| 504  | Gateway Timeout       |

## Resources

I always to keep a list of the amazing resources I found helpful in putting together some awesome:

[How to Document an Express API with Swagger UI and JSDoc](https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do)

[Learn HTTP Status Codes In 10 Minutes](https://www.youtube.com/watch?v=wJa5CTIFj7U)

[Introduction to SQL Developer Data Modeler](https://www.youtube.com/watch?v=wsVh1zLmQb0)

[SQL Developer Data Modeler Just what you need](https://www.youtube.com/watch?v=NfrUy-TYP_8&t=1741s)
