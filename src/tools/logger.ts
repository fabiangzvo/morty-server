import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf, colorize } = format;

const formatLog = printf(
  ({ level, message, timestamp }: Record<string, any>) => {
    return `[${level}] [${timestamp}] ${message}`;
  },
);

export default createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:MM:SS' }),
    colorize(),
    formatLog,
  ),
  transports: [new transports.Console()],
});
