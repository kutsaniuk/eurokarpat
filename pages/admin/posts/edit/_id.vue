<template>
  <div>
    <TheAdminPostsAddEdit/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminPostsAddEdit: () => import("@/components/admin/posts/TheAdminPostsAddEdit.vue")
    }
  };
</script>
