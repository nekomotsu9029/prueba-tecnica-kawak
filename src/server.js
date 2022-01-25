const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(require('./routes/routes.js'));

app.all('*', (req, res)=>{
    console.log('404ing');
    res.json({
        "status": "Failed",
        "message": "this endpoint address does not exist"
    })
});

app.listen(app.get('PORT'), ()=>{
    console.log('Server on port', app.get('PORT'));
})