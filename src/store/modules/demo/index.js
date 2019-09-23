const state = {
  num: 6
}

const getters = {
  isShow(state) {
    return state.num
  }
}

const mutations = {
  // 设置初始值
  set(state, sum) {
    state.num = sum
  },
  // 加
  add(state, sum) {
    state.num = state.num + sum
  },
  // 减
  cut(state, sum) {
    state.num = state.num - sum
  }
}

const actions = {
  setNum(fun, sum) {
    fun.commit('set', sum)
  },
  addNum(fun, sum) {
    fun.commit('add', sum)
  },
  cutNum(fun, sum) {
    fun.commit('cut', sum)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
