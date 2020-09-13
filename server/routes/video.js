const router = require('koa-router')()
const { getVideo } = require('../controller/article')


router.get('/:id', getVideo)

module.exports = router