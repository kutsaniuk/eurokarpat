<template>
  <div>
    <div class="blog-component mini-spacer">
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
                            color="grey lighten-5"
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
                      >На прикарпаття прибув черговий гуманітарний вантаж з ЄС
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
                          Спільна робота ГО «Єврокарпатська ініціатива» і ГО «Спілка волонтерів Прикарпаття» за сприяння
                          Галина
                          Карп та Ігор Лукинів дає результат.
                          Прикарпаття отримало черговий гуманітарний вантаж з Європейського союзу. Така підтримка для
                          українських захисників дуже важлива.
                          Разом до перемоги!
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  Бер <span>17</span>
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
                >На прикарпаття прибув черговий гуманітарний вантаж з ЄС
                </div
                >
                <p class=" mt-10 mb-10">
                  Спільна робота ГО «Єврокарпатська ініціатива» і ГО «Спілка волонтерів Прикарпаття» ...
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
                            color="grey lighten-5"
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
                      >Спільно можна зробити багато. Україна переможе!
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
                          Спільна допомога з Європейського союзу продовжує прибувати на Прикарпаття
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  Бер <span>19</span>
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
                >Спільно можна зробити багато. Україна переможе!
                </div>
                <p class=" mt-10 mb-10">
                  Спільна допомога з Європейського союзу продовжує прибувати на Прикарпаття
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
                            color="grey lighten-5"
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
                      >Вантаж уже прибув на Київщину
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
                          ГО «Єврокарпатська ініціатива» відправила гуманітарну допомогу для захисників столиці
                        </p>
                      </v-card-text>
                    </v-card>
                  </template>
                </v-dialog>
                <div class="date-badge bg-info-grediant">
                  Бер <span>20</span>
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
                >Вантаж уже прибув на Київщину
                </div
                >
                <p class=" mt-10 mb-10">
                  ГО «Єврокарпатська ініціатива» відправила гуманітарну допомогу для захисників столиці
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
    name: "Blog",
    data() {
      return {};
    },
    methods: {},
  };
</script>
