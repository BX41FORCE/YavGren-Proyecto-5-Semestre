const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'personas',
  {
    id_persona: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_persona: {
      type: Sequelize.STRING
    },
    apellido_persona: {
      type: Sequelize.STRING
    },
    correo_persona: {
      type: Sequelize.STRING
    },
    password_persona: {
      type: Sequelize.TEXT
    },
    puntaje_persona: {
        type: Sequelize.INTEGER
      },
    id_rol_persona: {
        type: Sequelize.INTEGER
      },   
      
  },

{
  timestamps: false
}
  
)