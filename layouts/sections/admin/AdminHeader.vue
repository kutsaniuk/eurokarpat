<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      dark
      :mini-variant.sync="mini"
      app
      color="primary"
      :width="300"
    >
      <v-list-item :class="{'pa-10': !mini, 'px-4': mini}" two-line>
        <v-list-item-avatar :size="mini ? 40 : 56">
          <v-avatar
            :size="mini ? 40 : 56"
            :color="user.color"
            class="font-weight-bold"
          >
            <span :class="{caption: mini}">{{avatarName}}</span>
          </v-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{user.fullName}}</v-list-item-title>
          <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
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
            <v-list-item-title>{{ $t(text) }}</v-list-item-title>
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
          ['mdi-text-box-multiple-outline', 'posts', '/admin/posts'],
          // ['mdi-account-supervisor', 'users', '/admin/users'],
          // ['mdi-account', 'profile', '/admin/me'],
          ['mdi-logout', 'logout', '/login'],
        ],
      }
    },
    mounted() {
      this.$store.dispatch('user/setAvatarName', this.user.fullName)
    },
    computed: {
      user() {
        return this.$cookie.get('user')
      },
      avatarName() {
        return this.$store.state.user.avatarName
      }
    }
  }
</script>

<style scoped>

</style>
