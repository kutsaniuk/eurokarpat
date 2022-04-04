<template>
  <div>
    <TheAdminProfile/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminProfile: () => import("@/components/admin/TheAdminProfile.vue")
    }
  };
</script>
