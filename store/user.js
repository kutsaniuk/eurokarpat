// initial state
export const state = () => ({
	avatarName: 'AA'
})

// getters
export const getters = {
	profile: state => state.profile,
}

// actions
export const actions = {
	async getProfile({commit}) {
		return this.$axios.$get('/auth/me')
	},
	async updateProfile({commit, dispatch}, data) {
		return this.$axios.$put('/user', data)
			.then(async ({user, accessToken}) => {
				this.$auth.reset()
				this.$auth.strategy.token.reset()

				await this.$auth.strategy.token.set(accessToken)
				await this.$auth.strategy.token.sync()
				await this.$auth.setUserToken(
					accessToken
				)

				dispatch('user/setAvatarName', user.fullName)

				this.$cookie.set('user', user)
			})
	},
	setAvatarName({commit}, fullName) {
		const letters = []

		if (fullName) {
			fullName.split(' ')
				.forEach(i => {
					if (i) {
						letters.push(i.charAt(0).toLocaleUpperCase())
					}
				})
			console.log(letters)
			commit('setAvatarName', letters.slice(0, 2).join(''))
		}
	}
}

// mutations
export const mutations = {
	setAvatarName: (state, payload) => {
		state.avatarName = payload
	}
}
