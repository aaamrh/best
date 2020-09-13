const router = require('koa-router')()
const index = require('./index')
const users = require('./users')
const article = require('./article')
const video = require('./video')


router.use('/', index.routes())
router.use('/users', users.routes())
router.use('/articles', article.routes())
router.use('/video', video.routes())


module.exports = router