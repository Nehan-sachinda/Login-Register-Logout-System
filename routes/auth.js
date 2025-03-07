// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const cors = require('cors');
const{test} = require('../controllers/authControllers')

// Register Route
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5175'
    })
)

router.get('/',test)

module.exports = router