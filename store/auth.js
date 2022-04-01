// initial state
export const state = () => ({
  user: null,
})

// getters
export const getters = {
  user: state => state.user,
};

// actions
export const actions = {
  async login({commit}, data) {
    return  this.$axios.$post('/login', data)
      .then(async (res) => {
        this.$auth.reset()
        this.$auth.strategy.token.reset()

        await this.$auth.strategy.token.set(data.accessToken)
        await this.$auth.strategy.token.sync()
        await this.$auth.setUserToken(
          data.accessToken
        )
        commit('setUser', res.data.user);
      })
  },
}

// mutations
export const mutations = {
  setUser: (state, user) => {
    state.user = user
  }
}
