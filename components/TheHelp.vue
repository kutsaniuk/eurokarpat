<template>
  <div>
    <div class="mini-spacer pt-16">
      <v-container>
        <!-- -----------------------------------------------
            Start Form Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="12">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold title-line mt-0">{{$t('howWeHelp')}}</h2>
            </div>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="7" lg="5" class="d-flex align-center">
            <div v-html="$t('helpDesc')" class="help-desc"></div>
          </v-col>
          <v-col cols="12" md="5" lg="6" class="ml-auto">
            <v-img
              class="shadow mb-2"
              :src="require('@/assets/images/help.jpeg')"
              :lazy-src="require('@/assets/images/help.jpeg')"
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
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss">
  .help-desc p {
    font-size: 18px;
    color: rgba(62, 69, 85, 0.9);
    /*line-height: 1.6;*/
  }
</style>
