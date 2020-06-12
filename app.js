// const express = require('express');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');

// const app = express();

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     graphiql: true,
//   })
// );

// app.listen(4000, () => {
//   console.log('Server running on port 4000');
// });

const express = require("express");
const graphqlHTTP = require("express-graphql");
const SpaceXschema = require("./schema/SpaceXSchema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: SpaceXschema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on  port ${PORT}`);
});
