// initial state
import truncateHtml from "truncate-html";

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
  async updatePost({commit}, post) {
    return this.$axios.$put('/posts/' + post.id, post)
  },
  async deletePost({commit, dispatch}, post) {
    await this.$axios.$delete('/images/' + post.imageId)
    if (post.videoId) {
      await dispatch('deleteVideoPost', post)
    }
    return this.$axios.$delete('/posts/' + post.id)
  },
  async deleteVideoPost({commit}, post) {
    return await this.$axios.$delete('/videos/' + post.videoId)
  },
  async uploadImagePost({commit}, image) {
    const formData = new FormData()
    formData.append('image', image)
    return this.$axios.$post('/images/upload', formData)
  },
  async uploadVideoPost({commit}, image) {
    const formData = new FormData()
    formData.append('video', image)
    return this.$axios.$post('/videos/upload', formData)
  },
  async translatePost({commit}, post) {
    const text = [post.title]

    if (!!truncateHtml(post.description, 1, { byWords: true, stripTags: true })) {
      text.push(post.description)
    }
    return this.$axios.$post('/posts/translate', {
      text
    })
  },
}

// mutations
export const mutations = {
  setPosts: (state, payload) => {
    state.posts = payload
  }
}
