<template>
  <!-- -----------------------------------------------
        Start Footer
  ----------------------------------------------- -->
  <v-footer class="footer">
    <v-container>
      <v-row class="py-0 py-md-15">
        <!-- -----------------------------------------------
        First Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">{{$t('address')}}</h4>
          <p class="mt-10">{{$t('location')}}</p>
        </v-col>
        <!-- -----------------------------------------------
        Second Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">{{$t('phone')}}</h4>
          <p class="mt-10 mb-0">{{$t('legalIssues')}} : <br>+380 (67) 006 02 06</p>
          <p>Office : +207 235 7890</p>
        </v-col>
        <!-- -----------------------------------------------
        Third Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">{{$t('email')}}</h4>
          <p class="mt-10 mb-0">
            <a class="dark-link" href="mailto:eurocarpathian@gmail.com">eurocarpathian@gmail.com</a>
          </p>
        </v-col>
        <!-- -----------------------------------------------
        Fourth Column
      ----------------------------------------------- -->
        <v-col cols="12" sm="12" md="12" lg="3" class="px-xs-0">
          <h4 class="font-weight-regular font-18">{{$t('social')}}</h4>

          <div class="social-icons mt-10">
            <a target="_blank" href="https://www.facebook.com/%D0%93%D0%9E-%D0%84%D0%B2%D1%80%D0%BE%D0%BA%D0%B0%D1%80%D0%BF%D0%B0%D1%82%D1%81%D1%8C%D0%BA%D0%B0-%D1%96%D0%BD%D1%96%D1%86%D1%96%D0%B0%D1%82%D0%B8%D0%B2%D0%B0-100890395904430/">
              <i class="mdi mdi-facebook"></i>
            </a>
            <a href="#">
              <i class="mdi mdi-instagram"></i>
            </a>
          </div>
        </v-col>
      </v-row>
      <div class="footer-bottom-bar font-14">
        <div class="d-block d-md-flex align-center justify-center">
          <p>
            {{$t('copyright')}}
          </p>
<!--          <div class="ml-auto">-->
<!--            <div class="d-flex align-center">-->
<!--              <a href="/" class="link px-4">Terms of Use</a>-->
<!--              <a href="/" class="link px-4">Legal Disclaimer</a>-->
<!--              <a href="/" class="link px-4">Privacy Policy</a>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </v-container>
  </v-footer>
  <!-- -----------------------------------------------
        End Footer
  ----------------------------------------------- -->
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      data: [],
    };
  },
  components: {},
};
</script>
