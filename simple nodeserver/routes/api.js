const express = require('express');
const router = express.Router();

router.get('/students',function(req,res){
     res.send({type: 'GET'});
 });

 router.post('/students', function(req, res){
     res.send({
         type: 'POST',
         name: req.body.name,
         roll: req.body.roll
     });
 });

 router.put('/students/:id', function(req, res){
     res.send({type: 'PUT'});
 });
 router.delete('/students/:id', function(req, res){
     res.send({type: 'DELETE'});
 });

 module.exports = router;
