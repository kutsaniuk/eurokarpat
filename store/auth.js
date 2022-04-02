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
    this.$axios.$get('/')
    return this.$axios.$post('/auth/login', data)
      .then(async ({user, accessToken}) => {
        this.$auth.reset()
        this.$auth.strategy.token.reset()

        await this.$auth.strategy.token.set(accessToken)
        await this.$auth.strategy.token.sync()
        await this.$auth.setUserToken(
          accessToken
        )

        commit('setUser', user);
      })
  },
}

// mutations
export const mutations = {
  setUser: (state, user) => {
    state.user = user
  }
}
