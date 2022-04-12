<template>
  <client-only>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex">
            <h2 class="d-flex flex-fill align-center">
              <template v-if="!loading">
                <v-btn
                  @click="cancel"
                  color="primary"
                  class="mr-5"
                  icon
                >
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <span class="d-flex flex-fill align-center justify-space-between" v-if="isEdit">
                <span class="mr-10">{{$i18n.locale === 'en' ? member.en.fullName : member.fullName }}</span>
                <template v-if="$vuetify.breakpoint.smAndUp">
                  <v-chip v-if="member.published" color="accent">
                    <v-icon class="mr-5">mdi-earth</v-icon>
                    {{$t('published')}}
                  </v-chip>
                  <v-chip v-else>
                    {{$t('notPublished')}}
                  </v-chip>
                </template>
               </span>
                <span v-else>{{$t('newMember')}}</span>
              </template>
              <v-progress-circular
                :size="24"
                v-if="loading"
                :width="4"
                color="primary"
                indeterminate
                class="ml-10"
              ></v-progress-circular>
            </h2>
          </div>
          <div class="text-right mt-5" v-if="isEdit && $vuetify.breakpoint.xsOnly">
            <v-chip v-if="member.published" color="accent">
              <v-icon class="mr-5">mdi-earth</v-icon>
              {{$t('published')}}
            </v-chip>
            <v-chip v-else>
              {{$t('notPublished')}}
            </v-chip>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-skeleton-loader
            min-height="300"
            v-if="loading"
            width="100%"
            type="card"
          ></v-skeleton-loader>
          <v-card v-else>
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-row no-gutters>
                <v-col cols="12" lg="8">
                  <v-card-title>
                    <img :width="24" src="@/assets/images/lang/ua.svg" alt="">
                    <span class="ml-5">Українська</span>
                  </v-card-title>
                  <v-card-text>
                    <form>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            :label="$t('fullName')"
                            outlined
                            name="fullName"
                            :rules="fullNameRules"
                            required
                            type="text"
                            v-model="member.fullName"
                            :placeholder="$t('fullName')"
                          ></v-text-field>
                          <v-text-field
                            :label="$t('position')"
                            outlined
                            name="position"
                            :rules="positionRules"
                            required
                            type="text"
                            v-model="member.position"
                            :placeholder="$t('position')"
                          ></v-text-field>
                          <v-text-field
                            outlined
                            name="instagramUrl"
                            :rules="urlRules"
                            required
                            type="text"
                            prepend-inner-icon="mdi-instagram"
                            v-model="member.instagramUrl"
                            placeholder="https://www.instagram.com/kutsaniuk"
                          ></v-text-field>
                          <v-text-field
                            outlined
                            name="facebookUrl"
                            :rules="urlRules"
                            required
                            type="text"
                            prepend-inner-icon="mdi-facebook"
                            v-model="member.facebookUrl"
                            placeholder="https://www.facebook.com/profile.php?id=100006297557330"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <Editor :placeholder="$t('description')"
                              v-model="member.description"/>

                    </form>
                  </v-card-text>
                  <v-divider class=""></v-divider>
                  <v-card-title class="justify-space-between">
                    <div class="d-flex align-center">
                      <img :width="24" src="@/assets/images/lang/us.svg" alt="">
                      <span class="ml-5">English</span>
                    </div>
                    <v-btn class="btn-custom-md"
                           color="primary"
                           elevation="0"
                           small
                           v-if="member.fullName && member.position"
                           :loading="translateLoading"
                           @click="translate">
                      <v-icon class="mr-5">mdi-google-translate</v-icon>
                      {{$t('translate')}}
                    </v-btn>
                  </v-card-title>
                  <v-card-text>
                    <form>
                      <v-text-field
                        :label="$t('fullName')"
                        outlined
                        name="titleEN"
                        :rules="fullNameRules"
                        required
                        type="text"
                        v-model="member.en.fullName"
                        :placeholder="$t('fullName')"
                      ></v-text-field>

                      <v-text-field
                        :label="$t('position')"
                        outlined
                        name="positionEN"
                        :rules="positionRules"
                        required
                        type="text"
                        v-model="member.en.position"
                        :placeholder="$t('position')"
                      ></v-text-field>

                      <Editor :placeholder="$t('description')"
                              v-model="member.en.description"/>

                    </form>
                  </v-card-text>
                </v-col>
                <v-divider vertical v-if="$vuetify.breakpoint.lgAndUp"></v-divider>
                <v-col cols="12" lg="4">
                  <div class="d-flex pa-10 align-center justify-center fill-height">
                    <div class="text-center">
                      <img
                        v-if="imagePreview"
                        width="100%"
                        class="mb-16"
                        :src="imagePreview"/>
                      <div class="mb-16" v-else>
                        <v-icon :color="imageError ? 'error' : '#eeeeee'" size="100">mdi-image-outline</v-icon>
                        <div v-if="imageError">
                          <v-input class="d-inline-block" error>
                            {{$t('imageRequired')}}
                          </v-input>
                        </div>
                        <div v-else>
                          <v-input class="d-inline-block grey--text">
                            {{$t('fileMaxSize')}} 3 Mb
                          </v-input>
                        </div>
                      </div>

                      <div class="d-flex justify-center">
                        <v-btn
                          @click="$refs.imageUpload.click()"
                          :disabled="saveMemberLoading"
                          class="btn-custom-md"
                          color="primary"
                          elevation="0"
                        >
                          <v-icon class="mr-5">mdi-image-outline</v-icon>

                          {{imagePreview ? $t('change') : $t('addImage')}}
                        </v-btn>
                        <!--<v-btn
                          v-if="imagePreview"
                          @click="removeImage"
                          :disabled="saveMemberLoading"
                          class="btn-custom-md"
                          elevation="0"
                        >
                          {{$t('remove')}}
                        </v-btn>-->
                      </div>
                    </div>
                  </div>

                  <label v-show="false"
                         ref="imageUpload" for="imageUpload" class="text-center">
                    <v-file-input
                      id="imageUpload"
                      hide-input
                      accept="image/png, image/jpeg, image/bmp"
                      @change="previewImage"
                    ></v-file-input>
                  </label>
                </v-col>
              </v-row>
            </v-form>
            <v-divider></v-divider>
            <v-card-actions class="d-block d-sm-flex justify-space-between">
              <v-checkbox
                v-model="member.published"
                :label="$t('publish')"
              ></v-checkbox>
              <div>
                <v-btn
                  class="btn-custom-md"
                  :block="$vuetify.breakpoint.xsOnly"
                  elevation="0"
                  :disabled="saveMemberLoading"
                  @click="cancel"
                >
                  {{$t('cancel')}}
                </v-btn>
                <v-btn
                  :loading="saveMemberLoading"
                  class="btn-custom-md ml-sm-5 mt-5 mt-sm-0"
                  :block="$vuetify.breakpoint.xsOnly"
                  @click="saveMember"
                  color="success"
                  elevation="0"
                >
                  {{isEdit ? $t('save') : $t('create')}}
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </client-only>
</template>
<script>
  export default {
    components: {
      Editor: () => import("@/components/utils/Editor"),
    },
    data() {
      return {
        valid: true,
        loading: false,
        saveMemberLoading: false,
        translateLoading: false,
        imageRules: [
          value => !value || value.size < 5000000 || 'Image size should be less than 5 MB!',
        ],
        fullNameRules: [
          v => !!v || this.$t('fullNameRequired'),
        ],
        positionRules: [
          v => !!v || this.$t('positionRequired'),
        ],
        urlRules: [
          v => (v && v.length > 0 && !/https?:[0-9]*\/\/[\w!?/\+\-_~=;\.,*&@#$%\(\)\'\[\]]+/.test(v)) ? this.$t('urlInvalid') : true,
        ],
        member: {
          fullName: '',
          position: '',
          description: '',
          facebookUrl: '',
          instagramUrl: '',
          en: {
            fullName: '',
            position: '',
            description: '',
          },
          published: true,
          imageId: '',
        },
        imageError: false,
        imagePreview: null,
        imageFile: null,
      };
    },
    computed: {
      posts() {
        return this.$store.state.member.posts
      },
      isEdit() {
        return !!this.$route.params.id
      }
    },
    async mounted() {
      if (this.isEdit) {
        await this.getMember()
      }

      this.postDate = this.$moment(this.member.created).format('YYYY-MM-DD')
    },
    methods: {
      async getMember() {
        this.loading = true
        try {
          this.member = await this.$store.dispatch('member/getMember', this.$route.params.id)

          this.imagePreview = `${this.$axios.defaults.baseURL}/images/${this.member.imageId}`
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.loading = false
      },
      async saveMember() {
        if (this.saveMemberLoading) {
          return
        }

        this.$refs.form.validate()

        if (!this.imageFile && !this.member.imageId) {
          this.imageError = true
          return
        }

        if (this.saveMemberLoading || !this.valid) {
          return
        }

        this.saveMemberLoading = true
        try {
          if (!this.isEdit) {
            this.member = await this.$store.dispatch('member/createMember', this.member)
          }

          if (this.imageFile) {
            const {id} = await this.$store.dispatch('member/uploadImageMember',  {image: this.imageFile, member: this.member})
            this.member.imageId = id
          }

          await this.$store.dispatch('member/updateMember', this.member)

          if (this.isEdit) {
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'top-right',
              timer: 3000,
              toast: true,
              title: this.$t('edited')
            })
          } else {
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'top-right',
              timer: 3000,
              toast: true,
              title: this.$t('added')
            })
            this.$router.push('/admin/members')
          }
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.saveMemberLoading = false
      },
      previewImage(file) {
        if (file) {
          if (file.size >= 3000000) {
            this.$swal.fire({
              icon: 'warning',
              text: this.$t('fileSizeError') + '3 Mb'
            })
            return
          }

          this.imageFile = file
          this.imagePreview = URL.createObjectURL(file)
        }
      },
      removeImage() {
        this.member.imageId = null
        this.imageFile = null
        this.imagePreview = null
      },
      async translate() {
        this.translateLoading = true
        try {
          const translations = await this.$store.dispatch('member/translateMember', this.member)

          this.member.en.fullName = translations[0]
          this.member.en.position = translations[1]

          if (translations.length > 2) {
            this.member.en.description = translations[2]
          }
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.translateLoading = false
      },
      cancel() {
        this.$router.push('/admin/members')
      }
    },
  };
</script>
<style lang="scss" scoped>
</style>
