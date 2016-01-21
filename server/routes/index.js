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
    var results = [];
    var tp = request.body;
    console.log(tp);

    pg.connect(connectionString, function(err, client, done){
        client.query('INSERT INTO talent(first_name, last_name, phone, low_range, high_range) values($1, $2, $3, $4, $5)', [tp.first_name, tp.last_name, tp.phone, tp.low_range, tp.high_range]);
        client.query('INSERT INTO skills(cookies, arson, nunchucks, stick) values($1, $2, $3, $4)', [tp.cookies, tp.arson, tp.nunchucks, tp.stick]);

        //gives us back entire table of talent
        var query = client.query('SELECT * FROM talent ORDER BY id ASC');
        var query2 = client.query('SELECT * FROM skills ORDER BY id ASC');

        //takes each row and pushes it to the results array
        query.on('row', function(row){
            results.push(row);
        });

        query2.on('row', function(row){
            results.push(row);
            console.log(results);
        });

        //when function is complete return results array. client.end closes connection w/ database
        query2.on('end', function(){
            client.end();
            return response.json(results);
        })
    })
});



















module.exports = router;


///**
// * Created by kyracrowston on 1/20/16.
// */
//var express = require('express');
//var path = require('path');
//var pg = require('pg');
//var router = express.Router();
//
//var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/talent_db';
//
////routing to index.html, response.send file allows to have more than one destination
//router.get("/*", function(request, response){
//    var file = request.params[0] || "/views/index.html";
//    response.sendFile(path.join(__dirname, "../public/", file));
//});
//
//router.post('/sendTalent', function(request, response){
//    var results = [];
//    var tp = request.body;
//    console.log(tp);
//
//    pg.connect(connectionString, function(err, client, done){
//        client.query('INSERT INTO talent(first_name, last_name, phone, low_range, high_range) values($1, $2, $3, $4, $5)', [tp.first_name, tp.last_name, tp.phone, tp.low_range, tp.high_range]);
//        client.query('INSERT INTO skills(cookies, arson, nunchucks, stick) values($1, $2, $3, $4)', [tp.cookies, tp.arson, tp.nunchucks, tp.stick]);
//
//        //gives us back entire table of talent
//        var query = client.query('SELECT * FROM talent ORDER BY id ASC');
//
//        //takes each row and pushes it to the results array
//        query.on('row', function(row){
//            results.push(row);
//        });
//
//        //when function is complete return results array. client.end closes connection w/ database
//        query.on('end', function(){
//            client.end();
//            return response.json(results);
//        })
//    })
//});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//module.exports = router;
