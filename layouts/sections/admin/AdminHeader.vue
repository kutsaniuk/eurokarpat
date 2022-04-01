<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      dark
      :mini-variant.sync="mini"
      absolute
      color="primary"
      :width="300"
      permanent
    >
      <v-list-item :class="{'pa-10': !mini, 'px-4': mini}" two-line>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="([icon, text, to], i) in items"
          :key="i"
          :to="to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        mini: false,
        items: [
          ['mdi-text-box-multiple-outline', 'Posts', '/admin'],
          ['mdi-account-supervisor', 'Users', '/admin/users'],
          ['mdi-account', 'Profile', '/admin/profile'],
          ['mdi-logout', 'Logout', '/logout'],
        ],
      }
    }
  }
</script>

<style scoped>

</style>
