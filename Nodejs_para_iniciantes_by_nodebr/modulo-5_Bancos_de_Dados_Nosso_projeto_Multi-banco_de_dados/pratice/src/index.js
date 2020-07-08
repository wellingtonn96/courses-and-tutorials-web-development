const ContextStrategy = require('./db/strategies/base/ContextStrategy')
const Mongodb = require('./db/strategies/Mongodb')
const Postgres = require('./db/strategies/Postgres')

const contextMongodb = new ContextStrategy(new Mongodb())
const contextPostgres = new ContextStrategy(new Postgres())
contextMongodb.create()
contextPostgres.create()