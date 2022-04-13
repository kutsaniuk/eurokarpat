<template>
  <div>
    <div class="blog-component mini-spacer pb-0">
      <v-container>
        <v-dialog v-model="postDialogShow"
          transition="dialog-top-transition"
          max-width="800"
        >
          <v-card v-if="postDialog">
            <v-toolbar
              color="primary"
              dark
            >{{getTitle(postDialog, true)}}
              <v-spacer></v-spacer>
              <v-btn icon @click="postDialogShow = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <video controls v-if="postDialog.videoId" width="100%">
              <source :src="`${$axios.defaults.baseURL}/videos/${postDialog.videoId}`"
                      type="video/mp4">
              Sorry, your browser doesn't support embedded videos.
            </video>
            <v-card-text class="pt-10" v-html="getDescription(postDialog, true)">
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-row justify="center">
          <v-col :key="i" cols="12" md="6" lg="4" v-for="(post, i) in posts.slice(0, showMore ? 100 : 3)">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div @click="openPostDialog(post)" class="position-relative mb-15">
                <v-img
                  :src="`${$axios.defaults.baseURL}/images/${post.imageId}`"
                  aspect-ratio="1.7"
                  alt="blog"
                  class="blog-img"
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

                <div class="date-badge bg-info-grediant text-capitalize">
                  {{getDate(post)}} <span>{{getDate(post, true)}}</span>
                </div>
              </div>
              <div @click="openPostDialog(post)">
                <div
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                >{{getTitle(post)}}
                </div>
                <p class=" mt-10 mb-10">
                  {{getDescription(post)}}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>


        <v-row v-if="!showMore">
          <v-col cols="12" align="center">
            <v-btn
              @click="showMore = !showMore"
              x-large
              class="mb-16"
              color="primary"
              elevation="0"
            >
              {{showMore ? $t('showLess') : $t('showMore')}}
            </v-btn>
          </v-col>
        </v-row>


        <!-- -----------------------------------------------
            End Blog
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
        postDialogShow: false,
        postDialog: {}
      };
    },
    computed: {
      posts() {
        return this.$store.state.post.publicPosts
      }
    },
    mounted() {
      this.getPosts()
    },
    methods: {
      async getPosts() {
        this.loading = true
        try {
          await this.$store.dispatch('post/getPublicPosts')
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
      openPostDialog(post) {
        this.postDialogShow = true
        this.postDialog = post
      },
      getDate(post, day) {
        let locale = this.$i18n.locale === 'en' ? 'en-gb' : 'uk'

        this.$moment.locale(locale)

        return this.$moment(post.created).format(day ? 'DD' : 'MMM')
      },
      getTitle(post, full) {
        const title = this.$i18n.locale === 'en' ? post.titleEN
          : post.title

        return full ? title : truncateHtml(title, 7, { byWords: true })
      },
      getDescription(post, full) {
        const description = this.$i18n.locale === 'en' ? post.descriptionEN
          : post.description

        return full ? description : truncateHtml(description, 7, { byWords: true, stripTags: true })
      }
    },

  };
</script>
<style scoped>
  .blog-card {
    cursor: pointer;
  }
</style>
