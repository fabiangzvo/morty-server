import { configConstants } from '../interfaces/global';
import { getEnvNumber } from '../tools/formatter';

export const CONFIG: configConstants = {
  ENV_SERVER: process.env?.ENV_SERVER || 'dev',
  PORT: getEnvNumber(process.env?.PORT, 4002),
  CORS_ORIGINS: process.env?.CORS_ORIGINS || '*',
  METHODS_ALLOWED: 'GET, POST, OPTIONS, PUT, DELETE',
  DATABASE_URL: process.env?.DATABASE_URL || 'postgres://postgres:root@11.00.111.000:5432/dev',
  SINTAXIS: {
    TAB: '  ',
  },
};
