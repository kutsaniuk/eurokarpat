<template>
  <div>
    <TheAdminMembersAddEdit/>
  </div>
</template>

<script>
  export default {
    middleware: 'auth',
    layout: 'admin',
    components: {
      TheAdminMembersAddEdit: () => import("@/components/admin/members/TheAdminMembersAddEdit.vue")
    }
  };
</script>
