<template>
  <v-app dark>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer class="footer justify-center">
      <div class="text-center">
        <a
          href="https://www.upwork.com/freelancers/~01aa0623459a6b59d3"
          target="_blank"
          class="d-block text-center mt-16"
        >
          <img
            width="140"
            :src="require('@/assets/images/powered.svg')"
            alt=""
          >
        </a>
      </div>
    </v-footer>
  </v-app>
</template>

<script>

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
}
</script>
