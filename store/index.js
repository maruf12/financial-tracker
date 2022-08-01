const actions = {
  onAuthStateChangedAction(state, { authUser, claims }) {
    // console.log(authUser)
    if (!authUser) {
      // remove state
      state.commit('SET_USER', null)

      // redirect from here
      this.$router.push({
        path: '/login',
      })
    } else {
      const { uid, email } = authUser
      state.commit('SET_USER', {
        uid,
        email,
      })
      console.log('masuk pak eko')
      this.$router.push({
        path: '/',
      })
    }
  },
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

const state = () => ({
  user: null,
})

const getters = {
  getUser(state) {
    return state.user
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
