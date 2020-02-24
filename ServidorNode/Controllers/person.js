const express = require('express');
const router = express.Router();
const db = require('../database')

const cors = require('cors')
router.use(cors())
//CRUD of People//Crud de personas//Table personas//
router.get('/get', function (req, res) {
    db.select().from('personas').orderBy('id_persona').then(function (data) {
        res.send(data);
    });
});

router.post('/post', function (req, res) {
    db.insert(req.body).into('personas').then(function (data) {
        res.sendStatus(200).send(data);
    });
});
//require id for update of data//requiere id para actualizar los datos//
router.put('/put/:id', function (req, res) {
    db('personas').where({ id_persona: req.params.id }).update(req.body).then(function (data) {
        res.sendStatus(200).send(data);
    });
});

router.delete('/del/:id', function (req, res) {
    db('personas').where({ id_persona: req.params.id }).del().then(function (data) {
        res.json({ success: true });
        res.sendStatus(200).send(data);
    });
});
router.get('/get/:id', function (req, res) {
    db('personas').where({ id_persona: req.params.id }).select().then(function (data) {
        res.send(data);

    });
});

router.get('/get/correo/:correo', function (req, res) {
    db('personas').where({ correo_persona: req.params.correo }).select().then(function (data) {
        res.send(data);
    });
});

router.get('/get/correo/:correo', function (req, res) {
    db('personas').where({ correo_persona: req.params.correo }).select().then(function (data) {
        res.send(data);
    });
});

module.exports = router;
