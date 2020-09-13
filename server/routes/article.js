const router = require('koa-router')()
const { create, articleList } = require('../controller/article')

router.post('/', create)

router.get('/:type', articleList)

router.get('/:type/:id', articleList)

module.exports = router