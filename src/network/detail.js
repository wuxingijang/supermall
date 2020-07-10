//详情页网络封装模块
import {request} from './index'
export function getdetail(id) {
  return request({
    url:'/api/polls/detail/',
    params:{
      id
    }
  })

}
