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
