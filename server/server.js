/**
 * Created by kyracrowston on 1/20/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');

var app = express();


app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);




app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});