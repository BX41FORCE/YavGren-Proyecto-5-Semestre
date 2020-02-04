const express = require('express')
const bcrypt = require('bcryptjs')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const User = require('../models/People')
users.use(cors())

process.env.SECRET_KEY = 'dacbbd7b22a45fe62f6adc6b2a1ca3d1dab5c6a6007078f9944697b2aae35'

users.post('/register', (req, res) => {
 
  const userData = {
    nombre_persona: req.body.nombre_persona,
    apellido_persona: req.body.apellido_persona,
    correo_persona: req.body.correo_persona,
    password_persona: req.body.password_persona,
    puntaje_persona: req.body.puntaje_persona,
    id_rol_persona: req.body.id_rol_persona
  }

  User.findOne({
    where: {
      correo_persona: req.body.correo_persona
    }
  })
    //TODO bcrypt
    .then(persona => {
      if (!persona && userData.password_persona) {
        bcrypt.hash(userData.password_persona, 5, (err, hash) => {
          if (!err) {
            userData.password_persona = hash;
            console.log(userData)
            User.create(userData)
          .then(persona => {
            let token = jwt.sign(persona.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            })
            res.json({ token: token })
          })
          .catch(err => {
            res.send('error: ' + err)
          })
          } else {
            return;
          }
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      correo_persona: req.body.correo_persona,
      password_persona: req.body.password_persona
    }
  })
    .then(persona => {
      if (persona) {
        let token = jwt.sign(persona.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        })
        res.json({ token: token })
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
        id_persona: decoded.id_persona
    }
  })
    .then(persona => {
      if (persona) {
        res.json(persona)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users