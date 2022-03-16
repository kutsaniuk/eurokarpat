<template>
  <div>
<!--    <Banner1 />-->
<!--    <AllCustomComponents/>-->

    <client-only>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            appId            : 255881316760464,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v13.0'
          });

          FB.api(
            "/100890395904430/feed",
            function (response) {
              if (response && !response.error) {
                console.log(response)
              }
            }
          );
        };


      </script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
    </client-only>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "NuxtJs UI kit | Free UI kit built with Vuetify",
      meta: [
        {
          hid: "description",
          name: "Next Ui Kit",
          content: "Next Ui Kit is the best way",
        },
      ],
    };
  },

  data() {
    return {};
  },
  components: {
    Banner1: () => import("@/components/custom/banner/Banner1"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    AllCustomComponents: () =>
      import("@/components/custom/AllCustomComponents"),
  },
};
</script>
