import { loadEnvFile } from 'node:process';

loadEnvFile();

import { CONFIG } from './config/constants';
import app from './config/app';
import { createApolloServer } from './config/graphql';
import logger from './tools/logger';

async function main(): Promise<void> {
  try {
    const { ENV_SERVER, API_PORT } = CONFIG;

    await createApolloServer(app);

    app.listen(API_PORT, CONFIG.DB.HOST);

    logger.info(
      `Starts API: Running https://${CONFIG.DB.HOST}:${API_PORT} | Env: ${ENV_SERVER}`,
    );
  } catch (error) {
    logger.error(error);

    process.exit(1);
  }
}

void main();
