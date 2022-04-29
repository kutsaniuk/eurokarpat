<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Contact Form
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col
            cols="12"
            sm="10"
            md="12"
            lg="4"
          >
            <div>
              <h4 class="font-weight-medium contact-title mt-0 text-center">
                {{ $t('welcome') }}
              </h4>
              <form>
                <v-row class="mt-15">
                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-text-field
                      v-model="email"
                      :label="$t('email')"
                      :error="authError"
                      outlined
                      name="email"
                      type="email"
                      placeholder="example@domain.com"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    class="py-0"
                  >
                    <v-text-field
                      v-model="password"
                      :error="authError"
                      :label="$t('password')"
                      type="password"
                      name="password"
                      outlined
                      :placeholder="$t('password')"
                    />
                  </v-col>
                </v-row>
                <v-row class="mt-0">
                  <v-col
                    cols="12"
                    class="text-center"
                  >
                    <v-btn
                      :loading="loading"
                      class="btn-custom-md"
                      :block="$vuetify.breakpoint.xsOnly"
                      color="primary"
                      elevation="0"
                      @click="login"
                    >
                      {{ $t('signIn') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </div>
          </v-col>
        </v-row>
        <v-row
          class="lang"
          @click="$i18n.setLocale($i18n.locale !== 'en' ? 'en' : 'uk')"
        >
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <div class="d-flex align-center">
              <img
                v-if="$i18n.locale !== 'en'"
                :width="$vuetify.breakpoint.smAndDown ? 18 : 24"
                src="@/assets/images/lang/us.svg"
                class="mr-4"
                alt="English"
              >
              <img
                v-else
                :width="$vuetify.breakpoint.smAndDown ? 18 : 24"
                src="@/assets/images/lang/ua.svg"
                class="mr-4"
                alt="Українська"
              >

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
			loading: false,
			authError: false
		}
	},
	created() {
		this.$store.dispatch('logout')
	},
	methods: {
		async login() {
			this.loading = true
			this.authError = false

			try {
				await this.$store.dispatch('login', {
					email: this.email,
					password: this.password
				})

				await this.$router.push('/admin/posts')
			} catch (e) {
				this.authError = true
			}
			this.loading = false
		}
	},
}
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
