import Vue from 'vue'
import Vuex from 'vuex'
import user from "@/store/modules/user";
import albums from '@/store/modules/albums'
import post from '@/store/modules/post'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    user,
    albums,
    post
  }
})
