const express = require('express');
const router = new express.Router();

const userRouter = require('./user')

router.use('/account', userRouter)

module.exports = router;