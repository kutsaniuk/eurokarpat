<template>
  <div>
    <TheHero/>

    <div id="help">
      <TheHelp/>
      <TheCta/>
      <TheBlog/>
    </div>

    <TheAbout/>
    <TheCta/>

  </div>
</template>

<script>
  export default {
    components: {
      TheHero: () => import("@/components/TheHero"),
      TheHelp: () => import("@/components/TheHelp"),
      TheBlog: () => import("@/components/TheBlog"),
      TheCta: () => import("@/components/TheCta"),
      TheAbout: () => import("@/components/TheAbout")
    }
  };
</script>
