'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.logger = void 0
const winston = require('winston')
const winston_elasticsearch_1 = require('winston-elasticsearch')
const esTransportOpts = {
  level: 'info',
}
const esTransport = new winston_elasticsearch_1.ElasticsearchTransport(
  esTransportOpts
)
esTransport.on('error', (error) => {
  console.error('Error in logger caught', error)
})
exports.logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    esTransport,
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})
//# sourceMappingURL=index.js.map
