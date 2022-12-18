const express = require('express')
const router = express.Router()
// 1. Define the path first 
// 2. Define the params. The params here would be the request and the response object
// 3. REQUEST --> Normally for POST
// 4. RESPOND --> Normally for GET, what you want the server to respond to 

//  === Template [GET]===
router.get('/', (req, res) => {
    res.send(
        {msg: "welcome my dudes"}
    )
    
})
// ==== Template [GET] with parameters ====
router.get('/:singleroute', (req, res) => {
    res.json(
        {msg: "Single workout"}
    )
})

// === Template [POST] with JOI. Usage of JOI to validate whether fields are field in correctly
router.post('/api/courses', (req, res) => {
    // Schema checks name property of the req body
    console.log(req.body)
    // Creation of a schema to check for the required parameters needed 
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    // Check 
    const result = schema.validate(req.body)
    // See the key value pairs for the result. If error, the error field will be populated, if value is true this will not be populated at all 
    console.log(result)

    // If the validation fails 
    if (result.error) {
        console.log(req.body)
        res.status(404).send(
            {
                code: res.statusCode,
                message: result.error.details[0].message
            }
        )
        return
    }
    else {
        res.status(200).send(
            {
                code: res.statusCode,
                message: result.value
            }
        )
        return
        
    }
})
// Always need to include this at the end of the page
module.exports = router;



// FAQ
// You may ask whats the different between res.json vs res.send, both methods are the same, nothing much here
// Apparently res.json worwks like res.send, and it converts non-objects to json as well. 