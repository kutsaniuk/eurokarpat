<template>
  <div>
    <TheHero />
    <TheHelp />
    <TheCta />
    <TheBlog />
    <TheAbout />
    <TheCta />

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
    TheBlog: () => import("@/components/TheBlog"),
    TheCta: () => import("@/components/TheCta"),
    TheAbout: () => import("@/components/TheAbout"),
    ComingSoon: () => import("@/components/shared/coming-soon/ComingSoon"),
    AllCustomComponents: () =>
      import("@/components/custom/AllCustomComponents"),
  }
};
</script>
