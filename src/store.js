import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    token: '',
    cararr:JSON.parse(localStorage.getItem('cararr')) || []//存贮购物车商品数组
  },
  mutations: {
    settoken(state, token) {
      state.token = token
    },
    tocar(state,tag) {
      let goods = state.cararr.find(v => v.title == tag.label)
      if(goods) {
        goods.carCount +=1
      } else {
        state.cararr.push({title:tag.label, carCount : 1})
      }
    },
    //购物车数量加一
    caradd(state,index) {
      state.cararr[index].carCount++;
    },
    //购物车数量减一
    carremove(state,index) {
      if(state.cararr[index].carCount != 1) {
      state.cararr[index].carCount--
      }else  {
        if(window.confirm(`确认从购物车中删除${state.cararr[index].title}吗`)) {
          state.cararr.splice(index,1)
        }
      }
    },
    //清空购物车
    carclear(state) {
      state.cararr = []
    }
  },
  actions: {

  },
  getters:{
    countsum:state=>{
      console.log(1)
      let num = 0
      state.cararr.forEach(v => {
        num += v.carCount
      })
      return num
    }
  }
})
store.subscribe((mutations,state) => {
  localStorage.setItem('cararr',JSON.stringify(state.cararr))
})
export default store
