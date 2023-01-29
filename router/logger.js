const express = require('express');
const router = express.Router();
const timeStamp = require('../Timestamp/getTimestamp');
const { logger } = require(`../controller/loggerFunct`);

/**
 * 
 */

router.post('/', async (req, res) => {
    try {
        const logMessage = req.body;
        // Validate the incoming log data
        if (!logMessage.message) {
            return res.status(400).json({ error: 'Missing log message' });
        }
        if (!logMessage.level) {
            return res.status(400).json({ error: 'Missing log level' });
        }

        const date_ob = new Date();
        const time = timeStamp(date_ob);
        logMessage.message.time = time;
        
        //const newMessage=Object.assign({time},req.body.message);
        logger.log(logMessage.level, logMessage.message);

        // Send a response indicating success

        return res.status(201).json({ message: 'Log received' });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
