<template>
  <div id="team">
    <div v-if="members.length" class="team-component mini-spacer">
      <v-dialog v-model="memberDialogShow"
                transition="dialog-top-transition"
                max-width="800"
      >
        <v-card v-if="memberDialog">
          <v-toolbar
            color="primary"
            dark
          >{{getFullName(memberDialog, true)}}
            <v-spacer></v-spacer>
            <v-btn icon @click="memberDialogShow = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" :sm="getDescription(memberDialog) ? 6 : 12">
                <v-img
                  class="mt-10"
                  :height="300"
                  :src="`${$axios.defaults.baseURL}/images/${memberDialog.imageId}`"
                  alt="team"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-btn block v-if="memberDialog.instagramUrl"
                       class="mt-10"
                       elevation="0"
                       target="_blank"
                       :href="memberDialog.instagramUrl">
                  <i class="mdi mdi-2x mdi-instagram mr-5"></i> Instagram
                </v-btn>
                <v-btn block v-if="memberDialog.facebookUrl"
                       class="mt-5"
                       elevation="0"
                       target="_blank"
                       :href="memberDialog.facebookUrl">
                  <i class="mdi mdi-2x mdi-facebook mr-5"></i> Facebook
                </v-btn>
              </v-col>
              <v-col v-if="getDescription(memberDialog)" cols="12" sm="6">
                <div class="mt-10" v-html="getDescription(memberDialog, true)"></div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                {{$t('team')}}
              </h2>
<!--              <p>-->
<!--                You can relay on our amazing features list and also our customer-->
<!--                services will be great experience for you without doubt and in-->
<!--                no-time-->
<!--              </p>-->
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row class="mt-13">
          <v-col :key="i" cols="12" md="6" lg="3" v-for="(member, i) in members">
            <v-card  @click="openMemberDialog(member)"  elevation="0" class="team-card overflow-hidden mb-15">
              <div class="social-overlay">
                <v-img
                  :height="250"
                  :src="`${$axios.defaults.baseURL}/images/${member.imageId}`"
                  alt="team"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <div class="img-overlay">
                  <ul>
                    <li v-if="member.instagramUrl">
                      <a target="_blank" :href="member.instagramUrl">
                        <i class="mdi mdi-instagram"></i>
                      </a>
                    </li>
                    <li v-if="member.facebookUrl">
                      <a target="_blank" :href="member.facebookUrl">
                        <i class="mdi mdi-facebook"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h5 class="team-title font-weight-medium font-18">
                  {{getFullName(member)}}
                </h5>
                <p class="team-subtitle">{{getPosition(member)}}</p>
              </div>
              <p>
                {{getDescription(member)}}
              </p>
            </v-card>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
  import truncateHtml from 'truncate-html'

  export default {
    data() {
      return {
        showMore: false,
        memberDialogShow: false,
        memberDialog: {}
      };
    },
    computed: {
      members() {
        return this.$store.state.member.publicMembers
      }
    },
    mounted() {
      this.getMembers()
    },
    methods: {
      async getMembers() {
        this.loading = true
        try {
          await this.$store.dispatch('member/getPublicMembers')
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            toast: true,
            position: 'bottom-right',
            title: this.$t('error')
          })
        }
        this.loading = false
      },
      openMemberDialog(member) {
        this.memberDialogShow = true
        this.memberDialog = member
      },
      getFullName(member, full) {
        const fullName = this.$i18n.locale === 'en' ? member.en.fullName
          : member.fullName

        return full ? fullName : truncateHtml(fullName, 20)
      },
      getPosition(member, full) {
        const position = this.$i18n.locale === 'en' ? member.en.position
          : member.position

        return full ? position : truncateHtml(position, 20)
      },
      getDescription(member, full) {
        const description = this.$i18n.locale === 'en' ? member.en.description
          : member.description

        return full ? description : truncateHtml(description, 7, {byWords: true, stripTags: true})
      }
    },

  };
</script>
