import {ApolloServer} from 'apollo-server'


import { resolvers } from './src/resolvers';
import { buildSchema }  from 'type-graphql';

const schema = buildSchema({
  resolvers,
});

const server = new ApolloServer({ schema, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});