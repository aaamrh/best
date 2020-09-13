const router = require('koa-router')();
const multer = require('@koa/multer');

const upload = multer({ 
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads/')
    },
    filename: function(req, file, cb){
      console.log(file)
      let fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
      cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
  })
});

router.get('/', function(ctx, next){
  console.log(process.env.NODE_ENV)
})

router.post('upload', upload.single('image'), (ctx, next) => {
  // TODO 上传文件  
  console.log('ctx.request.file', ctx.request.file);
  console.log('ctx.file', ctx.file);
  console.log('ctx.request.body', ctx.request.body);
  ctx.body = { 
    code: 0,
    msg: '上传成功',
    data: {
      link: 'http://localhost:' + process.env.PORT.trim() + '/uploads/' + ctx.file.filename
    }
  };
})


module.exports = router
