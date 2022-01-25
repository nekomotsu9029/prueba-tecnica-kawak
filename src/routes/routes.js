const express = require('express');
const path = require('path');
const router = express.Router();

const write_file = require(path.join(__dirname, '..', 'controllers', 'write_file.js'));

router.post('/api/write', (req, res)=>{
    let {file_name, content, extension} = req.body;
    const response = write_file({
        "file_name": file_name,
        "content": content,
        "extension": extension
    });
    res.status(response.status).json({"message": response.message});
});

module.exports = router;