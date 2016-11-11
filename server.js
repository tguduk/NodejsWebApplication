const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const homeController = require('./controllers/home');

/**
 * Create Express server.
 */
const app = express();

app.set('port', process.env.PORT || 3002);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.get('/',homeController.index);



/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('Express server listening on port %d in %s mode.', app.get('port'), app.get('env'));
});

module.exports = app;
