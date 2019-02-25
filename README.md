Repos:
- Front end: https://github.com/asdFletcher/40-database-dashboard
- Q server heroku: https://github.com/asdFletcher/40-q-server
- API server heroku: https://github.com/asdFletcher/40-api-server

Deployed:
- Front end: https://d23h8a4d7egq4b.cloudfront.net/
- Q server heroku: https://fl-40-q-server.herokuapp.com/
- API server heroku: https://fl-40-api.herokuapp.com/


# Startup:

# Local:

Start mongod:
Open a new terminal
Run:
```
mongod --dbpath /Users/fletcher/programming/codefellows/401/db
```

Start mongo:
Open a new terminal:
Run:
```
mongo
```

Test the databases:
`show dbs`

It should show a list of your local databases.

---

# Start the API server:

Verify environment variable (.env file for API server):
PORT=3002
Q_SERVER=http://localhost:3003
MONGODB_URI=mongodb://localhost:27017/dashboard

Run:
`nodemon` from the root directory:

`/Users/fletcher/programming/codefellows/401/labs/40-database-dashboard/api-server`

---

# Start the Q server:
Verify environment variable (.env file for Q server):
PORT=3003

Run:
`nodemon` from the root directory:

`/Users/fletcher/programming/codefellows/401/labs/40-database-dashboard/40-q-server`

---

# Start the database logger (for testing):

Verify environment variable (.env file for react test logger end):
Q_SERVER=http://localhost:3003

Run:
`nodemon` from the root directory:

`/Users/fletcher/programming/codefellows/401/labs/40-database-dashboard/logger`

---

# Test backend functionality:

API server event --> Q server re-emit --> logger hears it

Code like this can emit events continuously , and should appear in the logger console:

```js
setInterval(() => {
  Q.publish('database', 'create', {id:55});
  Q.publish('database', 'delete', {id:55});
  Q.publish('database', 'update', {id:55});
},2000);
```

If working , the logger can be turned off.

---

# Start the database dashboard:
Verify environment variable (.env file for react front end):
PORT=3001
REACT_APP_Q_SERVER=http://localhost:3003

(react-scripts `npm start` defaults to 3000 if this is not specified)

Run:
`npm start` from the root directory:

`/Users/fletcher/programming/codefellows/401/labs/40-database-dashboard/40-database-dashboard`


This should open Chrome to localhost:3001 and the app should render.

---

# Test front end functionality:

Code like this on the API server (or a test publisher) can emit events continuously , and if wired correctly, console logs can be made to appear in the Chrome console of the front-end:

```js
setInterval(() => {
  Q.publish('database', 'create', {id:55});
  Q.publish('database', 'destroy', {id:55});
  Q.publish('database', 'update', {id:55});
},2000);
```

---


# Deployed sites

# API server
https://fl-40-api.herokuapp.com


On Heroku, make sure to:
- provision a mongo database
- enable automatic deploy to the Github master branch

To test the deployed functionality of the API, run some database commands via httpie or postman:

GET requests:
http https://fl-40-api.herokuapp.com/api/v1/players
http https://fl-40-api.herokuapp.com/api/v1/teams

POST requests:
echo '{"name":"Red Sox"}' | http post https://fl-40-api.herokuapp.com/api/v1/teams
echo '{"bats":"R","name":"Joe Dimaggio","position":"C","team":"Red Sox","throws":"R"}' | http post https://fl-40-api.herokuapp.com/api/v1/players

DELETE requests:
http delete https://fl-40-api.herokuapp.com/api/v1/players/5c7351bdb0de260017f73df2

Once this is verified we can move on.

# Q server

We need to add the variable Q_SERVER on Heroku, but we can't use localhost, even for testing incrementally deployed segments of our app, because locahost on Heroku is different from our computer.

Deploy the `q-server` to Heroku and use it's URL to set the environment variables on the `API server`:

```
Q_SERVER=https://fl-40-q-server.herokuapp.com
```

Note: **don't include the trailing slash in the env variable**

The `q-server` doesn't need any environment variables set on Heorku.

---

Testing the `API-server` `q-server` combo. This can be done locally using the `q-server` address.

Start the React front end or the logger and connect it to the q-server using the appropriate environment variables. Events should come thru and be seen by the logger and/or the front end React app.


---

# Front end (Database dashboard)

This needs to be hosted on AWS

```
npm install -g @johnfellows/aws-tools
```

Follow the instructions here:
[johnfellows docs](https://www.npmjs.com/package/@johnfellows/aws-tools)


