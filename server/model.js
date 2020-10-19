const Mongoose = require('mongoose');
const db = Mongoose.connection;

Mongoose.connect("mongodb://127.0.0.1:27017/best", {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('数据库链接成功');
});


const models = {
  user: {
    'tel': {type: String, require: true},
    'email': {type: String, require: true},
    'pwd': {type: String, require: true},
  },
  article: {
    'url': {type: String, require: true},
    'title':  {type: String, require: true, unique: true},
    'content': {type: String, require: true},
    'content_html': {type: String, require: true},
    'like': {type: Number, require:true},
    'mark': {type: Number, require: true},
    'comment': {type: String, require: true},
    'type': {type: Array, require: true},
    'source_site': {type:String, require: true}, // 来源: 知乎 bilibili
    'externally': {type:String},                 // 外链代码， bilibil
    'author_name': {type: String, require},
    'author_avatar': {type: String, require},
  }
}

for(let i in models){
  Mongoose.model(i, new Mongoose.Schema(models[i]) );
}


module.exports = {
  getModel: function(name){ return Mongoose.model(name) }
};
