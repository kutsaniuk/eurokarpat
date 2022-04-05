<template>
  <div>
    <TheAdminPostsAddEdit/>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    layout: 'admin',
    components: {
      TheAdminPostsAddEdit: () => import("@/components/admin/posts/TheAdminPostsAddEdit.vue")
    }
  };
</script>
