import winston, { createLogger, format, transports } from 'winston';

const logger: winston.Logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.Console({
      level: 'info',
      format: format.simple(),
    }),
    new transports.Console({
      level: 'error',
      format: format.combine(format.colorize(), format.simple()),
    }),
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
