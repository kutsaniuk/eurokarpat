<template>
  <v-app dark>
    <Header />
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import  Header from '@/layouts/sections/Header'
import Footer from '@/layouts/sections/Footer'

export default {
	head() {
		return {
			title: 'NuxtJs UI kit | Free UI kit built with Vuetify',
			meta: [
				{
					hid: 'description',
					name: 'NuxtJs UI kit',
					content: 'NuxtJs UI kit is the best way'
				}
			]
		}
	},
	components: {
		Header,
		Footer
	},
	methods: {}
}
</script>

<style></style>
