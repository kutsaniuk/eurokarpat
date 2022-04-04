<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2 class="d-flex align-center">My Profile
          <v-progress-circular
            :size="24"
            v-if="loading"
            :width="4"
            color="primary"
            indeterminate
            class="ml-10"
          ></v-progress-circular>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-skeleton-loader
          min-height="300"
          v-if="loading"
          width="100%"
          type="card"
        ></v-skeleton-loader>
        <v-card v-else>
          <v-card-title>Change Name</v-card-title>
          <v-card-text>
            <form>
              <v-row>
                <v-col>

                </v-col>
              </v-row>
              <v-row class="mt-15">
                <v-col cols="3" class=" text-center">
                  <v-avatar
                    size="100"
                    class="font-weight-bold"
                    :color="user.color"
                  >
                    <h1 class="white--text">{{avatarName}}</h1>
                  </v-avatar>
                </v-col>
                <v-col cols="9" class="py-0">
                  <v-text-field
                    label="Email"
                    outlined
                    name="email"
                    type="text"
                    v-model="profile.email"
                    placeholder="Email"
                    readonly
                  ></v-text-field>
                  <v-text-field
                    label="fullName"
                    outlined
                    name="email"
                    @keyup="$store.dispatch('setAvatarName', profile.fullName)"
                    type="text"
                    v-model="profile.fullName"
                    placeholder="fullName"
                  ></v-text-field>
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
              save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-skeleton-loader
          min-height="300"
          v-if="loading"
          width="100%"
          type="card"
        ></v-skeleton-loader>
        <v-card v-else>
          <v-card-title>Change Password</v-card-title>
          <v-card-text>
            <form>
              <v-row class="mt-15">
                <v-col cols="12" class="py-0">
                  <v-text-field
                    label="New Password"
                    outlined
                    name="email"
                    type="text"
                    v-model="profile.email"
                    placeholder="Email"
                    readonly
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="py-0">
                  <v-text-field
                    label="Confirm Password"
                    outlined
                    name="email"
                    type="text"
                    v-model="profile.fullName"
                    placeholder="fullName"
                  ></v-text-field>
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
              save
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
      };
    },
    mounted() {
      this.getProfile()
    },
    methods: {
      async getProfile() {
        this.$store.dispatch('setAvatarName', this.user.fullName)

        this.loading = true
        try {
          this.profile = await this.$store.dispatch('user/getProfile')
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      }
    },
    computed: {
      user() {
        return this.$cookie.get('user')
      },
      avatarName() {
        return this.$store.state.avatarName
      }
    }
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
