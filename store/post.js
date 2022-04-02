// initial state
export const state = () => ({
  posts: [],
})

// getters
export const getters = {
  posts: state => state.posts,
};

// actions
export const actions = {
  async getPosts({commit}) {
    return this.$axios.$get('/posts')
      .then(async (posts) => {
        commit('setPosts', posts);
      })
  },
}

// mutations
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  }
}
