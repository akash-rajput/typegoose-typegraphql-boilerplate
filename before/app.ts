import {ApolloServer} from 'apollo-server'
import { resolvers } from './src/resolvers';
import { makeExecutableSchema }  from 'graphql-tools';
import * as path from 'path';
import * as fs from 'fs';

const schemaFile = path.join(__dirname, 'src/user/user.schema.graphql');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');

const schema = makeExecutableSchema({ typeDefs });

const server = new ApolloServer({ schema, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});