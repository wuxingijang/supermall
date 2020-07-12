import vue from "vue"
import vuex from 'vuex'
import actions from "./actions";
import mutations from "./mutations";
import state from "./state";
import getters from "./getters"
vue.use(vuex)
const store =new vuex.Store({
  state, actions, mutations,getters
})
export default store
