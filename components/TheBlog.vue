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
        <v-row v-if="showMore">
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
                      :src="require('@/static/videos/4.png')"
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
                      >{{$t('postTitle4')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/4.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc4')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>21</span>
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
                >{{$t('postTitle4')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc4').slice(0, 75) + ' ...'}}
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
                      :src="require('@/static/videos/5.png')"
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
                      >{{$t('postTitle5')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/5.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc5')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>22</span>
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
                >{{$t('postTitle5')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc5').slice(0, 75) + ' ...'}}
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
                      :src="require('@/static/videos/6.png')"
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
                      >{{$t('postTitle6')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/6.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc6')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>24</span>
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
                >{{$t('postTitle6')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc6').slice(0, 75) + ' ...'}}
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
                      :src="require('@/static/videos/7.png')"
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
                      >{{$t('postTitle7')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/7.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc7')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>26</span>
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
                >{{$t('postTitle7')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc7')}}
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
                      :src="require('@/static/videos/8.png')"
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
                      >{{$t('postTitle8')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/8.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc8')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>26</span>
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
                >{{$t('postTitle8')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc8').slice(0, 70) + ' ...'}}
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
                      :src="require('@/static/videos/9.png')"
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
                      >{{$t('postTitle9')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/9.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc9')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>27</span>
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
                >{{$t('postTitle9')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc9').slice(0, 75) + ' ...'}}
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
                      :src="require('@/static/videos/10.png')"
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
                      >{{$t('postTitle10')}}
                        <v-spacer></v-spacer>
                        <v-btn icon @click="dialog.value = false">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-toolbar>
                      <video controls width="100%">
                        <source src="~/static/videos/10.mp4"
                                type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                      </video>
                      <v-card-text>
                        <p class="mt-5">
                          {{$t('postDesc10')}}
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  {{$t('postDate')}} <span>28</span>
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
                >{{$t('postTitle10')}}
                </div>
                <p class=" mt-10 mb-10">
                  {{$t('postDesc10').slice(0, 75) + ' ...'}}
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
  export default {
    data() {
      return {
        showMore: false
      };
    },
    methods: {},
  };
</script>
