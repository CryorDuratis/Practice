// prep
// npm init
// install all the node modules --save
// install nodemon --save-dev
// postman prep
    // login the postman website, click settings, click add under manage environments, add env variable name and the domain:port it directs to. this lets us avoid typing in the localhost thing everytime: {{variable}}/api/job etc 
    // click collections on the left side, add new collection, name, describe. add folder "jobs": contains all requests related to jobs incl create read update delete apply
    // run an api, click on the right side "save as" for each request with a description, save in folder
    // then we can just click on it to automatically send the request, well organised and easy to see if we are missing any requests
// mongodb prep
    // add mongodb path to environment variables: search environment settings, add new, paste mongodb 'bin' path, save
    // create C://data/db folder to store temporary local data. in terminal, mongod <- to start database server locally, dont need if online database
    // mongo <- to start writing mongo queries
    // after setting up db connection, run npm I mongoose --save, then npm run dev, this should connect the local db, and also make the db accessible on the mongodb website through the link

// using node modules

require('nodemodules');
require('/ownmodules.js');

//app.js will require express, dotenv, database file in config, route file in routes

// using express

const app = express(); // express returns a function, containing all server client api stuff

// using config.env to set file variables. the dotenv nodemodule helps somehow.

dotenv.config({path : './path/to/file.env'});

//connect to db
connectDatabase(); //imported from our db file module

app.use('/link/attached',routemodule) // import all routes
// link is /api/v1 since version is impt?
// app.use(middleware) is called everytime a request is recieved in the server, so this just says go check that module.js for the routes

process.env.CONST // defined inside config.env in a config folder-------------------
// used for things like PORT, NODE_ENV
// PORT = 3000
// NODE_ENV = development

app.listen(portnumber, ()=> {
    // first class function embedded inside to be carried out immediately as a function statement.
});
// end of app.js--------------------------

// package.json scripts
// set "start" to run node app.js
// set "dev" to run nodemon app.js
// set "prod" to run SET NODE_ENV=production & nodemon app.js

// routes folder-----------------------
// stuff.js file to setup routes
// require express
express.Router(); // the router object with get post put delete methods etc

//require controller
const {getJobs} = require(controllerfile); //this allows us to get a particular export from a file?

router.get('/route1', (req, res)=>{
    //controller actions
}); //this can also be written as:

router.route('/route1').get(controller); //where controller is that req res function

// routes forward requests to the appropriate controllers
//--------------------------------------

//controller folder------------------------
// controllers then contact the models, which contact the db and pass back info to the controllers, the controllers use the views, then send the actual response back

//controller1.js
exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success:true,
        message:'What this route does'
    });
};
// this lets us name and specify our exports? instead of module.exports = { getJobs: ()=>{stuff} } ???

// config folder--------------------------
// theres alr a config.env, now we make a database.js for the mongoose stuff
//require mongoose
const thing = () => {
    mongoose.connect() {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }.then(con => {
        //console.log
    });
}

//module.exports = thing <- exports connection function

//use config.env to store the mongodb connection link mongodb://localhost:??/jobs