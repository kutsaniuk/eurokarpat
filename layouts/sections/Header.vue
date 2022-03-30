<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <client-only>
      <v-app-bar
        app
        fixed
        class="app-header navbar-light header1 px-0"
        flat
      >
        <v-container class="py-0 px-0 px-sm-8 fill-height">
          <!-- Logo -->
          <div class="logo">
            <NLink to="/">
              <img
                class="mt-sm-2 mb-2 mb-sm-0"
                :width="$vuetify.breakpoint.lgAndUp ? 120 : 70"
                src="@/assets/images/logos/logo.png"
                alt="logo"
              /></NLink>
          </div>

          <v-spacer></v-spacer>

          <!-- Desktop view Navigation -->
          <div
            class="navigation"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >
            <ul class="navbar-nav">
              <li class="nav-item" text>
                <a class="nav-link" href="#main" @click.prevent="goTo">{{$t('home')}}</a>
              </li>
              <li class="nav-item" text>
                <a class="nav-link" href="#help" @click.prevent="goTo">{{$t('howWeHelp')}}</a>
              </li>
              <li class="nav-item" text>
                <a class="nav-link" href="#about" @click.prevent="goTo">{{$t('about')}}</a>
              </li>
              <li class="nav-item" text>
                <a class="nav-link" href="#contacts" @click.prevent="goTo">{{$t('contacts')}}</a>
              </li>
              <li class="nav-item" text>
                <v-divider class="nav-item-divider"></v-divider>
                <div class="nav-link">
                  <v-btn
                    class="btn-custom-nm"
                    nuxt
                    :small="$vuetify.breakpoint.smAndDown"
                    to="/donate"
                    color="primary"
                    block
                    elevation="0"
                  >
                    {{$t('donate')}}
                  </v-btn>
                </div>
              </li>
            </ul>
          </div>
          <!-- login-regiter -->
         <!-- <v-btn
            class="d-none d-md-flex d-lg-flex btn-custom-nm ml-5"
            nuxt
            :small="$vuetify.breakpoint.smAndDown"
            color="primary"
            to="/donate"
            elevation="0"
          >
            {{$t('donate')}}
          </v-btn>-->

          <v-tooltip :disabled="$vuetify.breakpoint.xsOnly" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="btn-custom-nm"
                icon
                v-if="$i18n.locale !== 'en'"
                @click.prevent="$i18n.setLocale('en')"
              >
                <img :width="$vuetify.breakpoint.smAndDown ? 18 : 24" src="@/assets/images/lang/us.svg" alt="">
              </v-btn>

              <v-btn
                v-bind="attrs"
                v-on="on"
                class="btn-custom-nm"
                icon
                v-else
                @click.prevent="$i18n.setLocale('uk')"
              >
                <img :width="$vuetify.breakpoint.smAndDown ? 18 : 24" src="@/assets/images/lang/ua.svg" alt="">
              </v-btn>
            </template>
            <span>
            <template v-if="$i18n.locale === 'en'">Українська</template>
            <template v-else>English</template>
          </span>
          </v-tooltip>

          <v-btn class="d-block d-md-none" icon @click="toggleClass()">
            <v-app-bar-nav-icon/>
          </v-btn>
        </v-container>
      </v-app-bar>
    </client-only>
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
    mounted() {
      this.$nextTick(() => {
        this.scrollActiveLinkHandler()
      })
    },
    methods: {
      toggleClass: function (event) {
        this.isActive = !this.isActive;
      },
      async goTo(e) {
        if (this.$route.path === '/donate') {
          await this.$router.push('/')
          setTimeout(() => {
            this.goTo(e)
          }, 100)
          return
        }

        const el = document.querySelector(e.target.hash)

        if (!el) {
          return
        }

        const items = document.getElementsByClassName('nav-item')

        items.forEach(item => {
          item.children[0].classList.remove('nuxt-link-exact-active', 'nuxt-link-active')
        })

        e.target.classList.add('nuxt-link-exact-active', 'nuxt-link-active')

        const yOffset = -65
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      },
      scrollActiveLinkHandler() {
        if (this.$vuetify.breakpoint.xsOnly) {
          return
        }

        const linkItems = []
        const links = ['#main', '#help', '#about', '#contacts']

        links.forEach(hash => {
          const el = document.querySelector(hash)
          if (el) {
            linkItems.push({
              hash,
              start: el.getBoundingClientRect().top + window.pageYOffset - 150,
              end: el.getBoundingClientRect().bottom - 150
            })
          }
        })

        window.onscroll = () => {
          const items = document.getElementsByClassName('nav-item')
          if (items) {

            items.forEach(item => {
              item.children[0].classList.remove('nuxt-link-exact-active', 'nuxt-link-active')
            })

            linkItems.forEach(({start, end,  hash}) => {
              if (window.scrollY > start && window.scrollY < end) {
                const el = document.querySelector(`[href="${hash}"]`)

                el.classList.add('nuxt-link-exact-active', 'nuxt-link-active')
              }
            })
          }
        }
      }
    }
  };
</script>
