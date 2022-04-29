// initial state
import truncateHtml from 'truncate-html'

export const state = () => ({
	members: [],
	publicMembers: []
})

// getters
export const getters = {
	members: state => state.members,
	publicMembers: state => state.publicMembers,
}

// actions
export const actions = {
	async getMembers({commit}) {
		return this.$axios.$get('/members')
			.then(async (members) => {
				commit('setMembers', members)
			})
	},
	async getPublicMembers({commit}) {
		return this.$axios.$get('/members/published')
			.then(async (members) => {
				commit('setPublicMembers', members)
			})
	},
	async getMember({commit}, id) {
		return this.$axios.$get('/members/' + id)
	},
	async createMember({commit}, member) {
		return this.$axios.$post('/members', member)
	},
	async updateMember({commit}, member) {
		return this.$axios.$put('/members/' + member.id, member)
	},
	async deleteMember({commit, dispatch}, member) {
		await dispatch('deleteImageMember', member)
		return this.$axios.$delete('/members/' + member.id)
	},
	async deleteImageMember({commit}, member) {
		if (member.imageId) {
			return this.$axios.$delete('/images/' + member.imageId)
		}
	},
	async uploadImageMember({commit, dispatch}, {image, member}) {
		const formData = new FormData()
		formData.append('image', image)
		formData.append('memberId', member.id)
		await dispatch('deleteImageMember', member)
		return this.$axios.$post('/images/upload', formData)
	},
	async translateMember({commit}, {fullName, position, description}) {
		const text = [fullName, position]

		/* eslint-disable-next-line */
    if (!!truncateHtml(description, 1, { byWords: true, stripTags: true })) {
			text.push(description)
		}

		return this.$axios.$post('/translate', {
			text
		})
	},
}

// mutations
export const mutations = {
	setMembers: (state, payload) => {
		state.members = payload
	},
	setPublicMembers: (state, payload) => {
		state.publicMembers = payload
	}
}
