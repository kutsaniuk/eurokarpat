<template>
  <v-app dark>
    <AdminHeader />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
      meta: [
        {
          hid: "description",
          name: "NuxtJs UI kit",
          content: "NuxtJs UI kit is the best way"
        }
      ]
    };
  },
  components: {
    AdminHeader: () => import("@/layouts/sections/admin/AdminHeader"),
  },
  methods: {}
};
</script>

<style></style>
