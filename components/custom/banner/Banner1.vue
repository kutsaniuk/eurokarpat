<template>
  <div>
    <div class="banner1-component">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner1
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" md="7" lg="6" class="d-flex align-center">
            <div class="text-center text-md-left">
              <h2
                class="
                  banner1-title
                  font-weight-bold
                  text-uppercase
                  white--text
                "
              >
                ГО «Єврокарпатська ініціатива»
              </h2>
              <p class="white--text op-8 font-weight-regular">
                ГО «Єврокарпатська ініціатива» створювалася з метою в першу чергу для відновлення інвестиційної привабливості Івано-Франківщини. Проте повномасштабний напад росії на Україну змінив пріоритети у нашій діяльності.
              </p>
              <div class="mt-16 pt-2">
                <v-btn
                  nuxt
                  large
                  rounded
                  to="/basic-components"
                  class="btn-custom-md"
                  depressed
                  color="white"
                  elevation="0"
                >
                  Do you Need Help ?
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="5">

          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner1
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner1",
  data() {
    return {};
  },
  methods: {}
};
</script>
