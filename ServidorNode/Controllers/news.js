const express = require('express');
const router = express.Router();
const db = require('../database')

router.get('/get', function (req, res) {
    db.select().from('noticias').then(function (data) {
        res.send(data);
    });
});

router.post('/post', function (req, res) {
    db.insert(req.body).into('noticias').then(function (data) {
        res.sendStatus(200).send(data);
    });
});

router.put('/put/:id', function (req, res) {
    db('noticias').where({ id_noticia: req.params.id }).update(req.body).then(function (data) {
        res.sendStatus(200).send(data);
    });
});

router.delete('/:id',function(req, res){
    db('noticias').where({id_noticia: req.params.id}).del().then(function(data){
        res.json({success: true});
        //res.sendStatus(200).send(data);
    });
});
router.get('/get/:id',function(req, res){
    db('noticias').where({id_noticia: req.params.id}).select().then(function(data){
        res.send(data);
       
    });
});

module.exports = router;
