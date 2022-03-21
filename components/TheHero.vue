<template>
  <div>
    <div class="mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Banner Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="12">
            <div class="text-center mt-2">
              <h2 class="ui-title font-weight-bold">ГО «Єврокарпатська ініціатива»</h2>
              <p>
                Створювалася з метою в першу чергу для відновлення інвестиційної привабливості Івано-Франківщини. Проте
                повномасштабний напад росії на Україну змінив пріоритети у нашій діяльності.
              </p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Banner Text
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
<script>
  export default {
    name: "BannerText",
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss" scoped>
  .mini-spacer {
    background-image: url("~/assets/images/banner/bg3.svg");
    background-position: right;
    background-size: 100%;
    height: calc(100vh - 85px);
  }

  .ui-title {
    margin-top: 3rem;
    font-size: 55px;
  }

  p {
    font-size: 22px;
    width: 80%;
    margin: auto;
    margin-top: 3rem;
  }

  @media (max-width: 1024px) {
    .mini-spacer {
      background-position: bottom;
    }
  }

  @media (max-width: 767px) {
    .ui-title {
      font-size: 34px;
    }

    p {
      font-size: 16px;
      width: 100%;
    }
  }
</style>
