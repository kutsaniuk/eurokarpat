<template>
  <div id="main">
    <div class="mini-spacer">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="10" md="12" lg="12">
            <div class="text-center mt-sm-2">
              <h2 class="ui-title font-weight-bold"> {{$t('heroTitle')}}</h2>
              <p>
                {{$t('heroDesc')}}
              </p>
              <v-btn
                class="btn-custom-nm d-inline-flex d-sm-none cta font-weight-bold"
                nuxt
                to="/donate"
                x-large
                color="primary"
                elevation="0"
              >
                {{$t('donate')}}
              </v-btn>
            </div>
          </v-col>
        </v-row>
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
<style lang="scss" scoped>
  .mini-spacer {
    background-image: url("~/assets/images/banner/bg.svg");
    background-position: right;
    background-size: 100%;
    height: 100vh;
  }

  .ui-title {
    margin-top: 5rem;
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
    .mini-spacer {
      display: flex;
      align-items: center;
    }

    .ui-title {
      font-size: 34px;
      margin-top: 0;
    }

    p {
      font-size: 16px;
      width: 100%;
    }
  }

  .cta {
    font-size: 18px;
    margin-top: 100px;
    box-shadow: 0 0 0 5px rgb(61 89 166 / 40%) !important;
    text-transform: uppercase;
  }
</style>
