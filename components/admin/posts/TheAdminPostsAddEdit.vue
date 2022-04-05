<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex">
          <h2 class="d-flex align-center">
            <v-btn
              @click="cancel"
              color="primary"
              class="mr-5"
              icon
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <span>{{isEdit ? $t('editPost') : $t('newPost')}}</span>
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
              <v-col cols="8">
                <v-card-title>
                  <img :width="24" src="@/assets/images/lang/ua.svg" alt="">
                  <span class="ml-5">Українська</span>
                </v-card-title>
                <v-card-text>
                  <form>
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

                    <Editor :placeholder="$t('description')"
                            v-model="post.description"/>

                  </form>
                </v-card-text>
                <v-divider class=""></v-divider>
                <v-card-title>
                  <img :width="24" src="@/assets/images/lang/us.svg" alt="">
                  <span class="ml-5">English</span>
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
              <v-divider vertical></v-divider>
              <v-col cols="4">
                <div class="d-flex pa-10 align-center fill-height justify-center">
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
                          {{$t('imageMaxSize')}} 3 Mb
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

                <label v-show="false"
                       ref="imageUpload" for="imageUpload" class="text-center">
                  <v-file-input
                    id="imageUpload"
                    :rules="imageRules"
                    hide-input
                    accept="image/png, image/jpeg, image/bmp"
                    @change="previewImage"
                  ></v-file-input>
                </label>
              </v-col>
            </v-row>
          </v-form>
          <v-divider></v-divider>
          <v-card-actions class="justify-space-between">
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
                class="btn-custom-md ml-5"
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
          created: new Date(),
        },
        imageError: false,
        imagePreview: null,
        imageFile: null
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
    mounted() {
      if (this.isEdit) {
        this.getPost()
      }
    },
    methods: {
      async getPost() {
        this.loading = true
        try {
          this.post = await this.$store.dispatch('post/getPost', this.$route.params.id)

          this.imagePreview = `${this.$axios.defaults.baseURL}/images/${this.post.imageId}`
        } catch (e) {
          console.error(e)
        }
        this.loading = false
      },
      async savePost() {
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

          if (this.isEdit) {
            await this.$store.dispatch('post/savePost', this.post)
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'bottom-right',
              timer: 3000,
              toast: true,
              title: this.$t('edited')
            })
          } else {
            await this.$store.dispatch('post/createPost', this.post)
            this.$swal.fire({
              icon: 'success',
              showConfirmButton: false,
              position: 'bottom-right',
              timer: 3000,
              toast: true,
              title: this.$t('added')
            })
          }
          this.$router.push('/admin/posts')
        } catch (e) {
          this.$swal.fire({
            icon: 'error',
            title: this.$t('error')
          })
        }
        this.savePostLoading = false
      },
      previewImage(file) {
        if (file.size >= 3000000) {
          this.$swal.fire({
            icon: 'warning',
            text: this.$t('imageSizeError') + '3 Mb'
          })
          return
        }

        this.imageFile = file
        this.imagePreview = URL.createObjectURL(file)
      },
      removeImage() {
        this.post.imageId = null
        this.imageFile = null
        this.imagePreview = null
      },
      cancel() {
        this.$router.push('/admin/posts')
      }
    },
  };
</script>
<style lang="scss" scoped>
</style>
