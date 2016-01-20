/**
 * Created by kyracrowston on 1/20/16.
 */
var express = require('express');
var path = require('path');
var pg = require('pg');
var router = express.Router();

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/talent_db';

//routing to index.html, response.send file allows to have more than one destination
router.get("/*", function(request, response){
   var file = request.params[0] || "/views/index.html";
    response.sendFile(path.join(__dirname, "../public/", file));
});

router.post('/sendTalent', function(request, response){
   var talentPerson = request.body;
    console.log(talentPerson);
    pg.connect(connectionString, function(err, client, done){
        client.query('INSERT INTO talent(first_name, last_name) values($1, $2)', [talentPerson.first_name, talentPerson.last_name]);
        client.query('INSERT INTO talent(phone) values()', [talentPerson.phone]);

    })
});



















module.exports = router;
