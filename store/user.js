// initial state
export const state = () => ({})

// getters
export const getters = {
  profile: state => state.profile,
};

// actions
export const actions = {
  async getProfile({commit}) {
    return this.$axios.$get('/auth/me')
  },
}

// mutations
export const mutations = {}
