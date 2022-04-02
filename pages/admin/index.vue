<template>
  <div>
    <TheAdminPosts/>
  </div>
</template>

<script>
  export default {
    components: {
      TheAdminPosts: () => import("@/components/admin/TheAdminPosts.vue")
    }
  };
</script>


<style scoped>

</style>
