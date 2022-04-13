<template>
  <div>
    <v-app-bar
      v-if="$vuetify.breakpoint.mdAndDown"
      color="white"
      fixed
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!--      <v-toolbar-title>Title</v-toolbar-title>-->


      <v-btn plain active-class="primary--text" text nuxt to="/admin/posts">
        <v-icon class="mr-5">mdi-text-box-multiple-outline</v-icon> {{$t('posts')}}
      </v-btn>

      <v-btn plain active-class="primary--text" text nuxt to="/admin/members">
        <v-icon class="mr-5">mdi-account-supervisor</v-icon> {{$t('team')}}
      </v-btn>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs"
               v-on="on">
            <span v-if="$vuetify.breakpoint.smAndUp" class="black--text mr-5">{{user.fullName}}</span>
            <v-avatar
              :size="30"
              :color="user.color"
              class="font-weight-bold"
            >
              <span class="white--text">{{avatarName}}</span>
            </v-avatar>
          </div>
        </template>
        <v-list>
          <v-list-item to="/login">
            <v-list-item-content>
              <v-list-item-title><v-icon>mdi-logout</v-icon> {{$t('logout')}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

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
          ['mdi-account-supervisor', 'team', '/admin/members'],
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
