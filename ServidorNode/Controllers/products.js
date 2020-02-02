const express = require('express');
const router = express.Router();
const db = require('../database')

router.get('/get', function (req, res) {
    db.select().from('productos').then(function (data) {
        res.send(data);
    });
});

router.post('/post',function(req,res){
    db.insert(req.body).returning('*').into('productos').then(function(data){
        res.send(data);
    });
  });

  router.put('/:id',function(req, res){
    db('productos').where({id_producto: req.params.id}).update(req.body).then(function(data){
        res.sendStatus(200).send(data);
    });
});

router.delete('/:id',function(req, res){
    db('productos').where({id_producto: req.params.id}).del().then(function(data){
        res.json({success: true});
        //res.sendStatus(200).send(data);
    });
});
router.get('/:id',function(req, res){
    db('productos').where({id_producto: req.params.id}).select().then(function(data){
        res.send(data);
       
    });
});

module.exports = router;
