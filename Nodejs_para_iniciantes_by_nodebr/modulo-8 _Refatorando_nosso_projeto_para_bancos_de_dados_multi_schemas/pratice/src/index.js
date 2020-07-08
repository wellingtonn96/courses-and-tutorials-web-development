const ContextStrategy = require('./db/strategies/base/contextStrategy')
const Mongodb = require('./db/strategies/mongodb')
const Postgres = require('./db/strategies/postgres')

const contextMongodb = new ContextStrategy(new Mongodb())
contextMongodb.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()