<template>
  <div>
    <TheHero />
    <TheHelp />
<!--    <AllCustomComponents/>-->

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
    TheHero: () => import("@/components/TheHero"),
    TheHelp: () => import("@/components/TheHelp"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    AllCustomComponents: () =>
      import("@/components/custom/AllCustomComponents"),
  },
};
</script>
