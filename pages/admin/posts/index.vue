<template>
  <div>
    <TheAdminPosts/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminPosts: () => import("@/components/admin/posts/TheAdminPosts.vue")
    }
  };
</script>
