<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="4">
            <div>
              <h4 class="font-weight-medium contact-title mt-0 text-center">
                {{$t('welcome')}}
              </h4>
              <form>
                <v-row class="mt-15">
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      label="Email"
                      outlined
                      name="email"
                      type="email"
                      v-model="email"
                      placeholder="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <v-text-field
                      label="Password"
                      type="password"
                      name="password"
                      outlined
                      v-model="password"
                      placeholder="Password"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <!--                  btn-danger-gradient-->
                  <v-col cols="12" class="text-center">
                    <v-btn
                      @click="login"
                      :loading="loading"
                      class="btn-custom-md"
                      :block="$vuetify.breakpoint.xsOnly"
                      color="primary"
                      elevation="0"
                    >
                      {{$t('signIn')}}
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </div>
          </v-col>
        </v-row>
        <v-row class="lang" @click="$i18n.setLocale($i18n.locale !== 'en' ? 'en' : 'uk')">
          <v-col cols="12" class="d-flex justify-center">
            <div class="d-flex align-center">
              <img v-if="$i18n.locale !== 'en'" :width="$vuetify.breakpoint.smAndDown ? 18 : 24"
                   src="@/assets/images/lang/us.svg"
                   class="mr-4"
                   alt="English">
              <img v-else :width="$vuetify.breakpoint.smAndDown ? 18 : 24"
                   src="@/assets/images/lang/ua.svg"
                   class="mr-4"
                   alt="Українська">

              <span v-if="$i18n.locale === 'en'">Українська</span>
              <span v-else>English</span>
            </div>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Contact Form
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loading: false
      };
    },
    methods: {
      async login() {
        this.loading = true
        try {
          const {accessToken} = await this.$store.dispatch('auth/login', {
            email: this.email,
            password: this.password
          })

          this.$auth.reset()
          this.$auth.strategy.token.reset()

          await this.$auth.strategy.token.set(accessToken)
          await this.$auth.strategy.token.sync()
          await this.$auth.setUserToken(
            accessToken
          )

          this.$router.push('/admin')
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      }
    },
  };
</script>
<style lang="scss" scoped>
  .mini-spacer {
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
  }

  .lang {
    margin-top: 50px;

    .d-flex {
      cursor: pointer;
      transition: .2s;

      &:hover {
        color: #3d5aa6;
      }
    }
  }
</style>
