Go Full Stack!
===

## Code Wars Kata

Complete [today's Kata](https://www.codewars.com/kata/find-the-middle-element) 

## Lab

Update your project to use a SQL database!

## DB Scripts

1. Install the postgres database "drivers": `> npm i pg`
1. Add create and drop table(s) scripts to your project in a "scripts" folder
1. BONUS: Add a load script to seed your database with `.json` file from yesterday
1. Add npm scripts to create, drop and recreate table(s), as well as a script that does all three

## Server

1. Modify your `server.js`
    1. Open a client connection to the database
    1. Modify express routes to use the client to send queries to the database
1. Use postman to help validate the work incrementally. You should intersperse these tasks with app work! 
    1. If you have seed data, start by changing to SQL `SELECT` from db, then checking that `GET` returns all the seed data
    1. Create your `POST` route and SQL, test from postman and validate using `psql` the data is correctly
    populating in the database
    1. Change your `GET` to SQL `SELECT` (if you haven't yet) and check it works in postman
    1. Add your `GET` by id and check it works in postman

## New Requirements

### Detail View

1. Add a new app route at `/<items>/:id` that loads a detail view of your resource
    1. Create the detail view component
    1. In the `created` lifecycle hook, fetch the data
1. Add a new service api call that takes and id and fetches the requested resource from the server
1. Add a GET route on the server that returns the requested id from the database.
    1. Use `req.params.id` to get to the id!

## Bonus Stretch Goals!

### Delete Functionality

1. Add a delete button on the detail view
1. Create new client side api function
1. Add new route to express that deletes the specfied id from the database
1. When the action is complete, programmatically navigate back to the list view


### Update Functionality

1. Add an edit button on the detail view that navigates to a new route: `/<items>/:id/edit`
1. Create a new component that either has a more extensive update form, or reuse the add form if it has
all the right fields.
1. Add new route to express that deletes the updates by id
1. When the action is complete, programmatically navigate back to the detail view
    
## Rubric

* DB scripts **4pts**
* `GET`, `GET` by id, and `POST` routes that use sql to get data **3pts**
* New detail view **3pts**
    