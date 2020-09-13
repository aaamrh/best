const model = require('../model')
const Article = model.getModel('article')

const _filter = {'pwd':false, '__v':false}

// 创建一篇文章
const create = async (ctx, next) => {
  // Article.remove({}, (err, doc)=>{})
  const data = ctx.request.body;

  const article = new Article({
    title:   data.title,
    url:     data.url,
    like:    data.like,
    mark:    data.mark,
    type:    data.type,
    comment: data.comment,
    content: data.content,
    externally:    data.videoCode,
    content_html:  data.contentHtml,
    source_site:   data.sourceSite,
    author_name:   data.authorName,
    author_avatar: data.authorAvatar
  })

  try{
    const doc = await article.save()  
    ctx.body = {code: 0, msg: '保存成功'}
  }catch(err){
    ctx.body = {code: -1, err: err}
  }
}

// 获取文章类型列表
const articleList = async (ctx, next) => {
  try {
    const doc = await Article.find({type: ctx.params.type}, _filter)
    ctx.body={
      code: 0,
      data: doc
    }
  } catch (err){
    ctx.body={
      code: 1,
      msg: 'err'
    }
  }
}


const getVideo = async (ctx, next)=>{
  try {
    const doc = await Article.findOne({_id: ctx.params.id})
    ctx.body = {
      code: 0,
      data: doc
    }
  } catch (err) {
    
  }
}

module.exports = { create, articleList, getVideo }