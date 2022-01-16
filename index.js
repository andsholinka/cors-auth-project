const express = require("express");
const cors = require("cors");
const logger = require('morgan');
const path = require('path');

require('dotenv').config();
const PORT = process.env.PORT || 8080;

const apiRouter = require('./routers');

const app = express();
const router = express.Router();

app.use(cors())
app.use(logger('dev'));
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: '50mb'
}));

app.use('/images', express.static(path.join(__dirname, 'images')))

app.get("/", (req, res) => {
    res.send({
        message: "learn from free-code-camp"
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.use('/api', router);

router.use('/v1', apiRouter)

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
    res.status(404).json({
        status: res.statusCode,
        message: "Page not found"
    });
});