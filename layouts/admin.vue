<template>
  <v-app dark>
    <AdminHeader/>
    <v-main id="admin">
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            cols="12"
          >
            <nuxt/>
          </v-col>
        </v-row>
      </v-container>
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

<style scoped>
  #admin {
    background: rgba(61, 89, 166, .08);
  }
</style>
