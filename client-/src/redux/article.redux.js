import axios from "axios"
import { act } from "react-dom/test-utils"

const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS'
const ARTICLES_SUCCESS = 'ARTICLES_SUCCESS'

const initState = {
  code: null,
  url: '',
  title:'',
  content: '',
  like: 0,
  mark: 0,
  comment: 0,
  type: 'economy',
  sourceSite: '',
  videoCode: '' ,
  authorName: '',
  authorAvator: '',
}

/**** reducer ****/ 
export function article(state=initState, action){
  switch(action.type){
    case PUBLISH_SUCCESS:
      return { ...state, ...action.payload }

    case ARTICLES_SUCCESS:
      console.log(action)
      return {...action}

    default:
      return state
  }
}


/**** Action Creater ****/ 
function publishSuccess(data){
  return {type: PUBLISH_SUCCESS, payload: data}
}

function articlesSuccess(data){
  return {type: ARTICLES_SUCCESS, payload: data}
}
/**** Action End ****/


// 发布文章
export function publish(state){
  console.log(state)
  return ''
  return dispatch => {
    axios.post('/api/articles/', state).then(res=>{
      const data = res.data;
      if(!data.code){
        dispatch(publishSuccess(res.data))
      }
    })

  }
}

// 获取专题的文章列表
export function articles(state){
  console.log('type:', state.type)
  return dispatch => {
    axios.get('/api/articles/' + state.type)
    .then(res=>{
      console.log(res)
      dispatch(articlesSuccess())
    })
  }
}