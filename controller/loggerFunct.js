const winston = require('winston')

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
    ],
});

const printSimple = function () {
    logger.add(new winston.transports.Console({
        format: winston.format.simple()
    }))
};

module.exports = { logger, printSimple }