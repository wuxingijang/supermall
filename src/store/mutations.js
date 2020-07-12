export default {
    add(state,payload){
      payload.count++
    },
    addpush(state,payload){
      payload.checked=true
      state.catlist.push(payload)
    }
}
