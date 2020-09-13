let baseURL;

console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
switch(process.env.NODE_ENV){
  case 'development':
    baseURL = ''
    break;
  
  case 'production':
    baseURL = ''
    break;

  default:
    baseURL = ''
    break;
}

export default {
  baseURL
}