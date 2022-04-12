<template>
  <div>
    <TheAdminMembers/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminMembers: () => import("@/components/admin/members/TheAdminMembers.vue")
    }
  };
</script>
