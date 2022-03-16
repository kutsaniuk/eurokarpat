<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar
      app
      class="app-header position-relative navbar-light header1"
      flat
    >
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <div class="logo">
          <NLink to="/">
            <img
              v-if="$i18n.locale !== 'en'"
              class="mt-sm-2 mb-2 mb-sm-0"
              :width="$vuetify.breakpoint.mdAndUp ? 300 : 200"
              src="@/assets/images/logos/logo-full.svg"
              alt="logo"
            />
            <img
              v-else
              class="mt-sm-2 mb-2 mb-sm-0"
              :width="$vuetify.breakpoint.mdAndUp ? 300 : 200"
              src="@/assets/images/logos/logo-full-en.svg"
              alt="logo"
            />
            <span></span>
          </NLink>
        </div>

        <v-spacer></v-spacer>
        <v-btn class="d-block d-md-none" text @click="toggleClass()">
          <v-app-bar-nav-icon />
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/">{{$t('home')}}</n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/help">{{$t('howWeHelp')}}</n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/about">{{$t('about')}}</n-link>
            </li>
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/contacts">{{$t('contacts')}}</n-link>
            </li>
            <template v-if="$vuetify.breakpoint.xsOnly">
              <li class="nav-item" text>
                <v-btn
                  class="btn-custom-nm ml-5"
                  nuxt
                  color="primary"
                  to="/"
                  elevation="0"
                >
                  {{$t('donate')}}
                </v-btn>
              </li>
              <li class="nav-item py-3" text>
                <v-btn
                  class="btn-custom-nm ml-5"
                  icon
                  v-if="$i18n.locale !== 'en'"
                  @click.prevent="$i18n.setLocale('en')"
                >
                  <img width="24" src="@/assets/images/lang/us.svg" alt="">
                </v-btn>

                <v-btn
                  class="btn-custom-nm ml-5"
                  icon
                  v-else
                  @click.prevent="$i18n.setLocale('uk')"
                >
                  <img width="24" src="@/assets/images/lang/ua.svg" alt="">
                </v-btn>
              </li>
            </template>
          </ul>
        </div>
        <!-- login-regiter -->
        <v-btn
          class="d-none d-lg-flex btn-custom-nm ml-5"
          nuxt
          color="primary"
          to="/"
          elevation="0"
        >
          {{$t('donate')}}
        </v-btn>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              class="d-none d-lg-flex btn-custom-nm ml-5"
              icon
              v-if="$i18n.locale !== 'en'"
              @click.prevent="$i18n.setLocale('en')"
            >
              <img width="24" src="@/assets/images/lang/us.svg" alt="">
            </v-btn>

            <v-btn
              v-bind="attrs"
              v-on="on"
              class="d-none d-lg-flex btn-custom-nm ml-5"
              icon
              v-else
              @click.prevent="$i18n.setLocale('uk')"
            >
              <img width="24" src="@/assets/images/lang/ua.svg" alt="">
            </v-btn>
          </template>
          <span>
            <template v-if="$i18n.locale === 'en'">Українська</template>
            <template v-else>English</template>
          </span>
        </v-tooltip>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
</template>

<script>
  export default {
    name: "Header1",
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleClass: function (event) {
        this.isActive = !this.isActive;
      },
    },
  };
</script>
