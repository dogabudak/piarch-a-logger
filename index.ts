import * as winston from 'winston'
import { ElasticsearchTransport } from 'winston-elasticsearch'

const esTransportOpts = {
  level: 'info',
}
const esTransport = new ElasticsearchTransport(esTransportOpts)
esTransport.on('error', (error) => {
  console.error('Error in logger caught', error)
})
export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    esTransport,
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})
