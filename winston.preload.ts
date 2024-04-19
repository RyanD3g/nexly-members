import * as winston from 'winston';

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.printf(({ level, message, timestamp }) => `[${level}] -> ${message} <- [${timestamp}]`),
    ),
    transports:[
        new winston.transports.File({ filename:'./logs/log.errors.txt', level:'error' }),
        new winston.transports.File({ filename:'./logs/log.info.txt', level:'warn' }),
    ],
});
