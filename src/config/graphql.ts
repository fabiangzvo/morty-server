import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { Express } from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { GraphQLResolverMap } from '@apollo/subgraph/src/schema-helper';

export async function createApolloServer(app: Express): Promise<void> {
  const typesArray = loadFilesSync('src/modules/**/*.graphql', {
    extensions: ['graphql'],
  });

  const resolversArray = loadFilesSync('src/modules/**/resolver.ts', {
    extensions: ['ts'],
  });

  const typeDefs = mergeTypeDefs(typesArray);
  const resolvers = mergeResolvers(resolversArray);

  const server = new ApolloServer({
    schema: buildSubgraphSchema({
      typeDefs,
      resolvers: resolvers as GraphQLResolverMap<any>,
    }),
    plugins: [ApolloServerPluginInlineTrace()],
  });

  await server.start();

  app.use('/graphql', expressMiddleware(server));
}
