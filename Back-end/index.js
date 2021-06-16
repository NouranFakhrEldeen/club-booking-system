const express = require('express');
const { mongoose } = require('./startup/db.js');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const cors = require("cors");

const swaggerJSDoc = require('swagger-jsdoc');  
const swaggerUI = require('swagger-ui-express');  
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });


const swaggerOptions = {
  swaggerDefinition: {
      info: {
          title: 'Booking  REST API',
          description: "A REST API built with Express and MongoDB."
      },
  },
   apis: ["./controllers/category.controller.js","./controllers/booking.controller.js"]
  // apis:['index.js'], 
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);  
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));  

app.use(cors());
require('./startup/routes.js')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Server Started on port ", port);
  });
  

app.use(express.static('public'));

