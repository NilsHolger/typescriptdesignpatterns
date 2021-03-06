//to view es6 capabilities see http://node.green/
//node v8-options es6 module syntax currently under development (2016/06/25)
let path         = require('path');
let express      = require('express');
let expressHbs   = require('express-handlebars');
let cookieParser = require('cookie-parser');
let bodyParser   = require('body-parser');
let loki         = require('lokijs');
let routes       = require('./routes');


//setup
let database = new loki('database.json', { autoload: true, autosave: true });
// let database = new loki('users.json');
// database.loadDatabase({}, () => {
//     let users = database.getCollection('users');
//     if (users === null){
//         let users = database.addCollection('users');
//         users.insert({name: 'joe'});
//         users.insert({name: 'john'});
//         users.insert({name: 'jack'});
//         console.log(users.data);
//         database.saveDatabase();
//     } else {
//         console.log(users.data);
//     }
// });



let app      = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//view engine & main template
app.engine('.hbs', expressHbs({ defaultLayout: 'template', extname: '.hbs' }));
app.set('view engine', '.hbs');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static('public'));

//loki db reference for the router
app.use((req, res, next) => { req.database = database; next(); });

//router
routes.create(app);

//server
app.listen(app.get('port'), () => console.log('Listening on http://localhost:' + app.get('port')));
