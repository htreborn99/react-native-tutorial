const express = require('express')
const router = express.Router()
// 1. Define the path first 
// 2. Define the params. The params here would be the request and the response object
// 3. REQUEST --> Normally for POST
// 4. RESPOND --> Normally for GET, what you want the server to respond to 

//  === Template [GET]===
router.get('/', (req, res) => {
    res.send(
        {msg: "welcome my dudes, this is another testing route!"}
    )
    
})

// Always need to include this 
module.exports = router;

