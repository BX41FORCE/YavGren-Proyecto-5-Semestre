const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('YavGreen', 'root', '12345678', {
  host: 'localhost',
  dialect: 'mysql'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db