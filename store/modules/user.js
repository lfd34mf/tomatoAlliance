const user = {
  state: {
	  userInfo:{},
	  // 登录状态 0 未登录 1 已登录
	  loginStatus:'1'
  },

  mutations: {
    setUserInfo: (state, data) => {
      state.userInfo = data
    },
	setLoginStatus: (state, data) => {
      state.loginStatus = data
    }
  },
  actions: {
    // GetStorageSetting({ commit, state }) {
    //   if (
    //     JSON.stringify(state.setting) == '{}' &&
    //     window.localStorage.getItem('setting')
    //   ) {
    //     commit(
    //       'SET_SETTING',
    //       JSON.parse(window.localStorage.getItem('setting'))
    //     )
    //   }
    // }
  }
}

export default user
