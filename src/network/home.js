import {request} from "./index";
function gethomeMultidata() {
return request({
  url:'api/polls'
})
}
//首页的推荐信息请求
function getcommoditiles  (page) {
  return request(({
    url:'api/polls/commdent',
    //参数参数
    params:{
      page
    }
  }))
}
export {
  getcommoditiles,
  gethomeMultidata
}
