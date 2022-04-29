<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="d-flex align-center">
          {{ $t('myProfile') }}
          <v-progress-circular
            v-if="loading"
            :size="24"
            :width="4"
            color="primary"
            indeterminate
            class="ml-10"
          />
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-skeleton-loader
          v-if="loading"
          min-height="300"
          width="100%"
          type="card"
        />
        <v-card v-else>
          <v-card-title>{{ $t('changeName') }}</v-card-title>
          <v-card-text>
            <form>
              <v-row>
                <v-col />
              </v-row>
              <v-row class="mt-15">
                <v-col
                  cols="3"
                  class=" text-center"
                >
                  <v-avatar
                    size="100"
                    class="font-weight-bold"
                    :color="user.color"
                  >
                    <h1 class="white--text">
                      {{ avatarName }}
                    </h1>
                  </v-avatar>
                </v-col>
                <v-col
                  cols="9"
                  class="py-0"
                >
                  <v-text-field
                    v-model="profile.email"
                    :label="$t('email')"
                    outlined
                    name="email"
                    type="text"
                    readonly
                  />
                  <v-text-field
                    v-model="profile.fullName"
                    :label="$t('fullName')"
                    outlined
                    name="fullName"
                    type="text"
                    :placeholder="$t('fullName')"
                    @keyup="$store.dispatch('user/setAvatarName', profile.fullName)"
                  />
                </v-col>
              </v-row>
            </form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              :loading="loading"
              class="btn-custom-md"
              :block="$vuetify.breakpoint.xsOnly"
              color="primary"
              elevation="0"
            >
              {{ $t('save') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-skeleton-loader
          v-if="loading"
          min-height="300"
          width="100%"
          type="card"
        />
        <v-card v-else>
          <v-card-title>{{ $t('changePassword') }}</v-card-title>
          <v-card-text>
            <form>
              <v-row class="mt-15">
                <v-col
                  cols="12"
                  class="py-0"
                >
                  <v-text-field
                    v-model="profile.email"
                    :label="$t('newPassword')"
                    outlined
                    name="email"
                    type="text"
                    :placeholder="$t('newPassword')"
                    readonly
                  />
                </v-col>
                <v-col
                  cols="12"
                  class="py-0"
                >
                  <v-text-field
                    v-model="profile.fullName"
                    :label="$t('confirmPassword')"
                    outlined
                    name="email"
                    type="text"
                    :placeholder="$t('confirmPassword')"
                  />
                </v-col>
              </v-row>
            </form>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn
              :loading="loading"
              class="btn-custom-md"
              :block="$vuetify.breakpoint.xsOnly"
              color="primary"
              elevation="0"
            >
              {{ $t('save') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
	data() {
		return {
			profile: {},
			loading: false
		}
	},
	computed: {
		user() {
			return this.$cookie.get('user')
		},
		avatarName() {
			return this.$store.state.user.avatarName
		}
	},
	mounted() {
		this.getProfile()
	},
	methods: {
		async getProfile() {
			this.$store.dispatch('user/setAvatarName', this.user.fullName)

			this.loading = true
			try {
				this.profile = await this.$store.dispatch('user/getProfile')
			} catch (e) {
				console.error(e)
			}
			this.loading = false
		}
	}
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
