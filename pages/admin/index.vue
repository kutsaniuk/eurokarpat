<template>
  <div>
    <TheAdminPosts/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminPosts: () => import("@/components/admin/TheAdminPosts.vue")
    }
  };
</script>


<style scoped>

</style>
