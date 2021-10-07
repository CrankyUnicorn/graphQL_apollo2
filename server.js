import express from 'express';
import graphql from 'graphql';
import {graphqlHTTP} from 'express-graphql';
import schema from './schema.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}))

//means: whatever is in the environment variable PORT (site hoster), or 5000 if there's nothing there.
const PORT = process.env.PORT || 5000;

app.listen(PORT);