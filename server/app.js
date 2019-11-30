const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const connect = require('./config/db');

connect();

const app = express();

const port = 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`listening to requests on port ${port}`);
});
