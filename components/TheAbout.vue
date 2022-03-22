<template>
  <div id="about">
    <div class="mini-spacer pt-14">
      <v-container>
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="12">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold title-line mt-0">{{$t('aboutTitle')}}</h2>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="6" class="ml-auto">
            <v-img
              class="mb-2"
              :src="require('@/assets/images/logos/logo.png')"
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
          </v-col>
          <v-col cols="12" md="6" class="d-flex align-center">
            <div class="about-desc" v-html="$t('aboutDesc')"></div>
          </v-col>

        </v-row>

        <!-- -----------------------------------------------
            End Form Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    name: "FormBanner1",
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .mini-spacer {
    background-image: url("~/assets/images/banner/bg-reverse.svg");
    background-position: left;
    background-size: 100%;
  }

  @media (max-width: 1024px) {
    .mini-spacer {
      background-position: bottom;
    }
  }
</style>
<style lang="scss">
  .about-desc > p {
    font-size: 18px;
    color: rgba(62, 69, 85, 0.9);
  }
</style>
