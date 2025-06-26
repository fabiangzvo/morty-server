import { ApolloServer } from '@apollo/server';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { Express } from 'express';
import { expressMiddleware } from '@as-integrations/express5';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';

export async function createApolloServer(app: Express): Promise<void> {
  const typesArray = loadFilesSync('src/modules/**/*.graphql', {
    extensions: ['graphql'],
  });

  const typeDefs = mergeTypeDefs(typesArray);

  const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers: {} }),
    plugins: [ApolloServerPluginInlineTrace()],
  });

  await server.start();

  app.use('/graphql', expressMiddleware(server));
}
