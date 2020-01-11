'use strict'

const Koa = require('koa')
//const mount = require('koa-mount')
//const compress = require('koa-compress')
//const cors = require('kcors')
//const bodyParser = require('koa-bodyparser')
const config = require('./config')
const logger = require('./utils/logger')
//const database = require('./database')


const services = {
  server: null,
}
const app = new Koa()
//app.use(cors())
//app.use(compress())
//app.use(bodyParser())

//app.use(mount('/api', require('./routes/ .js')))
//app.use(mount('/api', require('./routes/ .js')))

app.use(async ctx => {
    ctx.body = 'Hello World';
  });


app.start = async () => {
  logger.info('Starting geocode server')
  //logger.info('Connecting (postgresql)')
  //database.connectUsersDB()
  //logger.info('Connecting (firestore)')
  //database.connectContactsDB()
  services.server = await new Promise((resolve, reject) => {
    const listen = app.listen(config.server.port, err => err ? reject(err) : resolve(listen))
  })
  return services.server
}

app.stop = () => {
//  logger.info('Stopping geocode server')
  services.server.close()
}

if (require.main === module) {
  app.start()
    .then(() => logger.info('geocode server is running'))
    .catch(err => logger.info(err))
}

process.once('SIGINT', () => app.stop())
process.once('SIGTERM', () => app.stop())

module.exports = { app }