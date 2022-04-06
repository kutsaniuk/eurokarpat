<template>
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
                <span class="mr-10">{{$i18n.locale === 'en' ? post.titleEN : post.title }}</span>
                <template v-if="$vuetify.breakpoint.smAndUp">
                  <v-chip v-if="post.published" color="accent">
                    <v-icon class="mr-5">mdi-earth</v-icon>
                    {{$t('published')}}
                  </v-chip>
                  <v-chip v-else>
                    {{$t('notPublished')}}
                  </v-chip>
                </template>
               </span>
              <span v-else>{{$t('newPost')}}</span>
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
          <v-chip v-if="post.published" color="accent">
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
                      <v-col cols="12" md="8">
                        <v-text-field
                          :label="$t('title')"
                          outlined
                          name="title"
                          :rules="titleRules"
                          required
                          type="text"
                          v-model="post.title"
                          :placeholder="$t('title')"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="4">
                        <v-menu
                          ref="menu"
                          v-model="menuDate"
                          :close-on-content-click="false"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              :value="getDate(post.created)"
                              :label="$t('date')"
                              prepend-inner-icon="mdi-calendar"
                              outlined
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            @change="setPostDate"
                            v-model="postDate"
                            color="primary"
                            :locale="$i18n.locale"
                            no-title
                            scrollable
                          >
                          </v-date-picker>
                        </v-menu>
                      </v-col>
                    </v-row>

                    <Editor :placeholder="$t('description')"
                            v-model="post.description"/>

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
                         v-if="post.title"
                         :loading="translateLoading"
                         @click="translate">
                    <v-icon class="mr-5">mdi-google-translate</v-icon>
                    {{$t('translate')}}
                  </v-btn>
                </v-card-title>
                <v-card-text>
                  <form>
                    <v-text-field
                      :label="$t('title')"
                      outlined
                      name="titleEN"
                      :rules="titleRules"
                      required
                      type="text"
                      v-model="post.titleEN"
                      :placeholder="$t('title')"
                    ></v-text-field>

                    <Editor :placeholder="$t('description')"
                            v-model="post.descriptionEN"/>

                  </form>
                </v-card-text>
              </v-col>
              <v-divider vertical v-if="$vuetify.breakpoint.lgAndUp"></v-divider>
              <v-col cols="12" lg="4">
                <div class="d-flex pa-10 align-center justify-center">
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
                        :disabled="savePostLoading"
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
                        :disabled="savePostLoading"
                        class="btn-custom-md"
                        elevation="0"
                      >
                        {{$t('remove')}}
                      </v-btn>-->
                    </div>
                  </div>
                </div>
                <div class="d-flex pa-10 align-center justify-center">
                  <div class="text-center">
                    <video v-if="videoPreview"
                           class="mb-16"
                           controls width="100%">
                      <source :src="videoPreview"
                              type="video/mp4">
                      Sorry, your browser doesn't support embedded videos.
                    </video>
                    <div class="mb-16" v-else>
                      <v-icon :color="'#eeeeee'" size="100">mdi-video-outline</v-icon>
                      <div>
                        <v-input class="d-inline-block grey--text">
                          {{$t('fileMaxSize')}} 5 Mb
                        </v-input>
                      </div>
                    </div>

                    <div class="d-flex"
                         :class="{'justify-center': !videoPreview, 'justify-space-between': videoPreview}">
                      <v-btn
                        @click="$refs.videoUpload.click()"
                        :disabled="savePostLoading"
                        class="btn-custom-md"
                        color="primary"
                        elevation="0"
                      >
                        <v-icon class="mr-5">mdi-video-outline</v-icon>

                        {{videoPreview ? $t('change') : $t('addVideo')}}
                      </v-btn>
                      <v-btn
                        v-if="videoPreview"
                        @click="removeVideo"
                        :loading="videoRemoveLoading"
                        :disabled="savePostLoading"
                        elevation="0"
                      >
                        {{$t('remove')}}
                      </v-btn>
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
                <label v-show="false"
                       ref="videoUpload" for="videoUpload" class="text-center">
                  <v-file-input
                    id="videoUpload"
                    hide-input
                    accept="video/mp4"
                    @change="previewVideo"
                  ></v-file-input>
                </label>
              </v-col>
            </v-row>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions class="d-block d-sm-flex justify-space-between">
            <v-checkbox
              v-model="post.published"
              :label="$t('publish')"
            ></v-checkbox>
            <div>
              <v-btn
                class="btn-custom-md"
                :block="$vuetify.breakpoint.xsOnly"
                elevation="0"
                :disabled="savePostLoading"
                @click="cancel"
              >
                {{$t('cancel')}}
              </v-btn>
              <v-btn
                :loading="savePostLoading"
                class="btn-custom-md ml-sm-5 mt-5 mt-sm-0"
                :block="$vuetify.breakpoint.xsOnly"
                @click="savePost"
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
        savePostLoading: false,
        translateLoading: false,
        imageRules: [
          value => !value || value.size < 5000000 || 'Image size should be less than 5 MB!',
        ],
        titleRules: [
          v => !!v || this.$t('titleRequired'),
        ],
        post: {
          title: '',
          description: '',
          titleEN: '',
          descriptionEN: '',
          published: true,
          imageId: '',
          videoId: '',
          created: new Date()
        },
        imageError: false,
        imagePreview: null,
        imageFile: null,

        videoError: false,
        videoPreview: null,
        videoFile: null,
        videoRemoveLoading: false,

        menuDate: false,
        postDate: null
      };
    },
    computed: {
      posts() {
        return this.$store.state.post.posts
      },
      isEdit() {
        return !!this.$route.params.id
      }
    },
    async mounted() {
      if (this.isEdit) {
        await this.getPost()
      }

      this.postDate = this.$moment(this.post.created).format('YYYY-MM-DD')
    },
    methods: {
      async getPost() {
        this.loading = true
        try {
          this.post = await this.$store.dispatch('post/getPost', this.$route.params.id)

          this.imagePreview = `${this.$axios.defaults.baseURL}/images/${this.post.imageId}`

          if (this.post.videoId) {
            this.videoPreview = `${this.$axios.defaults.baseURL}/videos/${this.post.videoId}`
          }


        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.loading = false
      },
      async savePost() {
        if (this.savePostLoading) {
          return
        }

        this.$refs.form.validate()

        if (!this.imageFile && !this.post.imageId) {
          this.imageError = true
          return
        }

        if (this.savePostLoading || !this.valid) {
          return
        }

        this.savePostLoading = true
        try {
          if (this.imageFile) {
            const {id} = await this.$store.dispatch('post/uploadImagePost', this.imageFile)
            this.post.imageId = id
          }

          if (this.videoFile) {
            const {id} = await this.$store.dispatch('post/uploadVideoPost', this.videoFile)
            this.post.videoId = id
          }

          if (this.isEdit) {
            await this.$store.dispatch('post/updatePost', this.post)
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'top-right',
              timer: 3000,
              toast: true,
              title: this.$t('edited')
            })
          } else {
            await this.$store.dispatch('post/createPost', this.post)
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'top-right',
              timer: 3000,
              toast: true,
              title: this.$t('added')
            })
            this.$router.push('/admin/posts')
          }
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.savePostLoading = false
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
        this.post.imageId = null
        this.imageFile = null
        this.imagePreview = null
      },
      previewVideo(file) {
        if (file) {
          if (file.size >= 5000000) {
            this.$swal.fire({
              icon: 'warning',
              text: this.$t('fileSizeError') + '5 Mb'
            })
            return
          }

          this.videoPreview = null
          this.videoFile = file
          setTimeout(() => {
            this.videoPreview = URL.createObjectURL(file)
          }, 100)
        }
      },
      async removeVideo() {
        if (this.post.videoId) {
          this.videoRemoveLoading = true
          try {
            await this.$store.dispatch('post/deleteVideoPost', this.post)
            this.post.videoId = null

            this.savePost()

            this.videoFile = null
            this.videoPreview = null
          } catch (e) {
            this.$swal.fire({
              icon: 'error',
              title: this.$t('error')
            })
          }
          this.videoRemoveLoading = false
        } else {
          this.post.videoId = null
          this.videoFile = null
          this.videoPreview = null
        }
      },
      async translate() {
        this.translateLoading = true
        try {
          const translations = await this.$store.dispatch('post/translatePost', this.post)

          this.post.titleEN = translations[0]

          if (translations.length > 1) {
            this.post.descriptionEN = translations[1]
          }
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.translateLoading = false
      },
      setPostDate(date) {
        this.post.created = new Date(date)
        this.postDate = date
        this.menuDate = false
      },
      getDate(date) {
        let locale = this.$i18n.locale === 'en' ? 'en-gb' : 'uk'

        this.$moment.locale(locale)
        const localeData = this.$moment.localeData();

        return this.$moment(date).format(localeData.longDateFormat('LL'))
      },
      cancel() {
        this.$router.push('/admin/posts')
      }
    },
  };
</script>
<style lang="scss" scoped>
</style>
