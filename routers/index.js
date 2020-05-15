const router = require('koa-router')()
const IndexController = require('./../controllers/index')

router
    .get('/recordcredit', IndexController.recordCredit)

module.exports = router