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
    return this.$axios.$post('/auth/login', data)
      .then(async (res) => {
        commit('setUser', res.user);
        return res
      })
  },
}

// mutations
export const mutations = {
  setUser: (state, user) => {
    state.user = user
  }
}
