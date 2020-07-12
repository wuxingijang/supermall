export default {
    addcart(context,payload){
     return new Promise((resolve, reject) =>{
       //判断之间是否有商品
       let oldpayload=context.state.catlist.find(item=>item.id===payload.id)
       if (oldpayload){
         context.commit('add',oldpayload)
         resolve("当前的商品数量加一")
       }
       else{
         payload.count=1
         context.commit('addpush',payload)
         resolve('添加商品成功')
       }
     } )
    },
    checkall(context) {

    }

}
