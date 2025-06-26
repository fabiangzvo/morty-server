import { loadEnvFile } from 'node:process';

loadEnvFile();

import { CONFIG } from './config/constants';
import app from './config/app';
import { createApolloServer } from './config/graphql';
import sequelize from './config/database';
import logger from './tools/logger';

async function main(): Promise<void> {
  try {
    const { ENV_SERVER, PORT } = CONFIG;

    await sequelize.authenticate();
    await createApolloServer(app);

    app.listen(PORT, () => {
      logger.info(
        `Starts API: Running https://localhost:${PORT} | Env: ${ENV_SERVER}`,
      );
    });
  } catch (error) {
    logger.error(error);

    process.exit(1);
  }
}

void main();
