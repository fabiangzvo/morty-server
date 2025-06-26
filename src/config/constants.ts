import { configConstants } from '../interfaces/global';
import { getEnvNumber } from '../tools/formatter';

export const CONFIG: configConstants = {
  ENV_SERVER: process.env?.ENV_SERVER || 'dev',
  API_PORT: getEnvNumber(process.env?.PORT, 4002),
  CORS_ORIGINS: process.env?.CORS_ORIGINS || '*',
  METHODS_ALLOWED: 'GET, POST, OPTIONS, PUT, DELETE',
  DB: {
    USERNAME: process.env?.DB_USERNAME || 'postgres',
    PASSWORD: process.env?.DB_PASSWORD || 'root',
    HOST: process.env?.DB_HOST || '11.00.111.000',
    DATABASE: process.env?.DB_DATABASE || 'prod',
    DEV_DATABASE: process.env?.DB_DEV_DATABASE || 'dev',
  },
  SINTAXIS: {
    TAB: '  ',
  },
};
