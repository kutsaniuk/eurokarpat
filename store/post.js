// initial state
import truncateHtml from 'truncate-html'

export const state = () => ({
	posts: [],
	publicPosts: []
})

// getters
export const getters = {
	posts: state => state.posts,
	publicPosts: state => state.publicPosts,
}

// actions
export const actions = {
	async getPosts({commit}, params) {
		return this.$axios.$get('/posts', {
			params
		})
			.then(async (posts) => {
				commit('setPosts', posts)
			})
	},
	async getPublicPosts({commit}) {
		return this.$axios.$get('/posts/published')
			.then(async (posts) => {
				commit('setPublicPosts', posts)
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
		await dispatch('deleteImagePost', post)
		if (post.videoId) {
			await dispatch('deleteVideoPost', post)
		}
		return this.$axios.$delete('/posts/' + post.id)
	},
	async deleteVideoPost({commit}, post) {
		if (post.videoId) {
			return this.$axios.$delete('/videos/' + post.videoId)
		}
	},
	async deleteImagePost({commit}, post) {
		if (post.imageId) {
			return this.$axios.$delete('/images/' + post.imageId)
		}
	},
	async uploadImagePost({commit, dispatch}, {image, post}) {
		const formData = new FormData()
		formData.append('image', image)
		formData.append('postId', post.id)
		await dispatch('deleteImagePost', post)
		return this.$axios.$post('/images/upload', formData)
	},
	async uploadVideoPost({commit, dispatch}, {video, post}) {
		const formData = new FormData()
		formData.append('video', video)
		formData.append('postId', post.id)
		await dispatch('deleteVideoPost', post)
		return this.$axios.$post('/videos/upload', formData)
	},
	async translatePost({commit}, post) {
		const text = [post.title]

		if (truncateHtml(post.description, 1, {byWords: true, stripTags: true})) {
			text.push(post.description)
		}
		return this.$axios.$post('/translate', {
			text
		})
	},
}

// mutations
export const mutations = {
	setPosts: (state, payload) => {
		state.posts = payload
	},
	setPublicPosts: (state, payload) => {
		state.publicPosts = payload
	}
}
