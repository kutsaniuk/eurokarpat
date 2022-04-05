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
  async getPost({commit}, id) {
    return this.$axios.$get('/posts/' + id)
  },
  async createPost({commit}, post) {
    return this.$axios.$post('/posts', post)
  },
  async savePost({commit}, post) {
    return this.$axios.$put('/posts/' + post.id, post)
  },
  async uploadImagePost({commit}, image) {
    const formData = new FormData()
    formData.append('image', image)
    return this.$axios.$post('/images/upload', formData)
  },
}

// mutations
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  }
}
