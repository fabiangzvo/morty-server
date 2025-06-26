import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { ApiResponse } from '../interfaces/global';
import logger from '../tools/logger';
import { CONFIG } from './constants';
import { Express, Response, Request } from 'express';

const app: Express = express();

const morganMiddleware = morgan(
  `ENV: ${CONFIG.ENV_SERVER} | [:remote-addr] | [:method] | [:url] | [:status]`,
  {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  },
);
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use((_req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', CONFIG.CORS_ORIGINS);
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-access-token',
  );
  res.header('Access-Control-Allow-Methods', CONFIG.METHODS_ALLOWED);
  res.header('Allow', CONFIG.METHODS_ALLOWED);
  next();
});
app.use(morganMiddleware);

app.get('/', (_req: Request, res: Response) => {
  const response: ApiResponse<{ message: string }> = {
    data: { message: 'Payment API running' },
    statusCode: 200,
    message: 'Request Successful',
  };

  res.send(response);
});

export default app;
