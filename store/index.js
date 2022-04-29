// initial state
export const state = () => ({})

// getters
export const getters = {}

// actions
export const actions = {
	async login({commit, dispatch}, data) {
		return this.$axios.$post('/auth/login', data)
			.then(async ({user, accessToken}) => {
				this.$auth.reset()
				this.$auth.strategy.token.reset()

				await this.$auth.strategy.token.set(accessToken)
				await this.$auth.strategy.token.sync()
				await this.$auth.setUserToken(
					accessToken
				)

				dispatch('user/setAvatarName', user.fullName)
				getUserAvatarColor(user)

				this.$cookie.set('user', user)
			})
	},
	async logout() {
		this.$auth.reset()
		this.$auth.strategy.token.reset()
		this.$cookie.remove('user')
	}
}

// mutations
export const mutations = {}


function getUserAvatarColor(user) {
	const colors = [
		'#FFB900',
		'#D83B01',
		'#B50E0E',
		'#E81123',
		'#B4009E',
		'#5C2D91',
		'#0078D7',
		'#00B4FF',
		'#008272',
		'#107C10'
	]

	let sum = 0
	for (let index in user.email) {
		sum += user.email.charCodeAt(index)
	}
	user.color = colors[sum % colors.length]
}
