<template>
  <div>
    <TheHero />

    <div id="help">
      <TheHelp />
      <TheCta />
      <TheBlog />
    </div>

    <TheTeam />

    <TheAbout />
    <TheCta />
  </div>
</template>

<script>
import TheHero from '@/components/TheHero'
import TheHelp from '@/components/TheHelp'
import TheBlog from '@/components/TheBlog'
import TheCta from '@/components/TheCta'
import TheAbout from '@/components/TheAbout'
import TheTeam from '@/components/TheTeam'

export default {
	components: {
		TheHero,
		TheHelp,
		TheBlog,
		TheCta,
		TheAbout,
		TheTeam
	},
	mounted() {
		this.$nextTick(() => {
			this.scrollActiveLinkHandler()
		})
	},
	destroyed() {
		window.onscroll = null

		const items = document.getElementsByClassName('nav-item')
		if (items) {
			items.forEach(item => {
				item.children[0].classList.remove('nuxt-link-exact-active', 'nuxt-link-active')
			})
		}
	},
	methods: {
		scrollActiveLinkHandler() {
			if (this.$vuetify.breakpoint.xsOnly) {
				return
			}

			const links = ['#main', '#help', '#about', '#contacts']

			window.onscroll = () => {
				const items = document.getElementsByClassName('nav-item')
				if (items) {
					items.forEach(item => {
						item.children[0].classList.remove('nuxt-link-exact-active', 'nuxt-link-active')
					})

					links.forEach((hash) => {
						const el = document.querySelector(hash)

						if (el.getBoundingClientRect().top < (hash === '#contacts' ? 600 : 150) &&
                el.getBoundingClientRect().bottom > (hash === '#about' ? 400 : 150)) {
							const el = document.querySelector(`[href="${hash}"]`)

							el.classList.add('nuxt-link-exact-active', 'nuxt-link-active')
						}
					})
				}
			}
		}
	}
}
</script>
