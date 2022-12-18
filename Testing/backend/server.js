const Joi = require('joi');
const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express')
const app = express();
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API",
            version: "1.0.0"
        }
    },
    apis: ['index.js'],
};
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
require('dotenv').config()
const swaggerDocs = swaggerJSDoc(swaggerOptions);
// Routes
const testingRoute = require('./routes/testingroute')
const anotherTestingRoute = require('./routes/anothertesting')

// === Initialisation of Firebase materials ===
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://is483-ecd48-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.database();




// === Usage of app.use, app.use creates a new middleware ===
// Express json parses any incoming request to be 
app.use(express.json())

// Grabs all the necessary stuff from testingroute.js and puts it here
// We can define the routes here. Over here, we declare /6bit/testing/.. Anything after that would be based on the routes in testingRoutes
app.use('/6bit/testing',testingRoute)
app.use('/6bit/anotherroute',anotherTestingRoute)

// Swagger UI
app.use('/6bit-api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
/**
 * @swagger
 * /api/courses:
 *   post:
 *      description: testing get
 *      parameters: 
 *      - name: name
 *        description: Name of the course
 *        in: body
 *        required: true
 *        type: object
 *      responses:
 *          200:
 *            description: Success
 *          404:
 *            description: Failure
 * 
 */

/*

*/
// Testing route 
app.post('/items', (req, res) => {
    console.log(req.body)
    // If no key or table specified, it would create a unique key (E.g -NJY_kpyq2dR9TAuNHQ4).
    // db.ref('data/-NJY_kpyq2dR9TAuNHQ4').push(req.body);
    // In order to set the table name we would need to use set. However use this only if a new "table" is needed
    // db.ref('data').child("testingitem").set({
    //     name: "Gun",
    //     description: "AK47"
    // })
    // If you want to update have to use the update clause
    db.ref('data/testingitem').update(req.body)
    res.send(req.body);
  });



// ==== Defining Port Number, similar to the flask run application ====
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))