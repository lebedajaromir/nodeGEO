'use strict'

module.exports = env => ({
  env,
  server: {
    port: process.env.PORT || 3000,
  },
  auth: {
    secret: process.env.AUTH_SECRET
      || 'sdfdsfd9sfdsf4sdfs2dfsdfwhbv8hf9docgaewu348y983fsdhjkuo',
    saltRounds: 7,
    createOptions: {
      // 1 hour
      expiresIn: 60 * 60,
      algorithm: 'HS256',
      issuer: `com.jale.adress-book.${env}`,
    },
    verifyOptions: {
      algorithm: 'HS256',
      issuer: `com.jale.adress-book.${env}`,
    },
  },
  db: {
    host: process.env.DB_SERVER,
    user: process.env.DB_USER,
    dbname: process.env.DB_NAME,
  },
  logger: {
    enabled: true,
    stdout: true,
    minLevel: 'debug',
  }

})
