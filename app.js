var express = require('express');
var swig = require('swig');
var config = require("./dest/server/config")
var log = require('./dest/server/logger');
var Path = require("path")
var PAGERouter = require("./dest/server/utils/page-router.js").Router;
var APIRouter = require("./dest/server/utils/api-router.js").Router;
var bodyParser = require('body-parser');
var multer = require('multer');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var sessionMiddleware = require('./server/conf/session-middleware.js').sessionMiddleware;

var app = express();

log.use(app);
app.use(function (req,res,next) {
    if(config.enableStrongCache){
        res.set({
            'Cache-Control': 'public, max-age=31536000000',
            'expires':'Never Expires'
        });
    }
    next();
})
app.use('/static', express.static('dest/views/static'));
// app.use('/views/static', express.static('dest/views/static'));
app.use('/widget', express.static('dest/views/widget'));
// app.use('/views/widget', express.static('dest/views/widget'));

app.use(bodyParser.json({limit: '50mb'})); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
app.use(cookieParser());
app.use(sessionMiddleware);

//设置模板引擎
app.set('views', './dest/views/page')
app.set('view engine', 'tpl');

app.engine('tpl', swig.renderFile);

new PAGERouter(app);
new APIRouter(app);


var server = app.listen(config.ServerHost.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});



// 其他 router ...
// 404
// app.get('*', function(req, res){
//     res.render('404', {
//         title: 'No Found'
//     })
// });



