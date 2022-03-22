<template>
  <div>
    <div class="blog-component mini-spacer pb-0">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="800"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="require('@/static/videos/1.png')"
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
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="primary"
                        dark
                      >{{$t('postTitle1')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/1.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc1')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>17</span>
                </div>
              </div>
              <div>
                <div
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                >{{$t('postTitle1')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDescShort1')}}
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="800"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="require('@/static/videos/2.png')"
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
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="primary"
                        dark
                      >{{$t('postTitle2')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/2.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc2')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>19</span>
                </div>
              </div>
              <div>
                <div
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                >{{$t('postTitle2')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc2')}}
                </p>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="4">
            <v-card elevation="0" class="blog-card overflow-hidden mb-15">
              <div class="position-relative mb-15">
                <v-dialog
                  transition="dialog-top-transition"
                  max-width="800"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      v-bind="attrs"
                      v-on="on"
                      :src="require('@/static/videos/3.png')"
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
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar
                        color="primary"
                        dark
                      >{{$t('postTitle3')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/3.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc3')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>20</span>
                </div>
              </div>
              <div>
                <div
                  href="#"
                  class="
                    blog-title
                    text-decoration-none
                    font-weight-medium font-18
                  "
                >{{$t('postTitle3')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc3')}}
                </p>
              </div>
            </v-card>
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
  export default {
    data() {
      return {};
    },
    methods: {},
  };
</script>
