import express from 'express';
import morgan from 'morgan';
var Client = require('node-rest-client').Client;
var client = new Client();

const router = express.Router();

// log all requests to the console
router.use(morgan('dev'));

function notFoundHandler(res) {
  return res.status(404).send('Todo could not be found!');
}

function errorHandler(res, err) {
  return res.status(500).send(err);
}

router.route('/properties')

  // create a Todo (accessed at POST http://localhost:8080/api/todos)
  .get(function(req, res) {

    // Ids must be a valid UUID
    // if (!(req.body.id.match(/[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i))) {
    //   return res.status(400).send('Id is invalid!');
    // }

    // todos must have a name
    // if (!req.body.name) {
    //   return res.status(400).send('Name field is required!');
    // }
         // do the POST call
    client.post("http://www.onerent.co/api/Property/availableProperties", function (data, response) {
        // parsed response body as js object 
        res.json(200, {data})
    }).on('error', function (err) {
        res.json(400, { error:"wrong URL"})
    });
    // handling client error events 
    client.on('error', function (err) {
      res.json(500, {error:'API Issues'})
    });
    
  });

export default router;
