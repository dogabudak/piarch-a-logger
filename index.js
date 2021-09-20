"use strict";
exports.__esModule = true;
exports.logger = void 0;
var winston = require("winston");
exports.logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});
exports.logger.warning('hello');
