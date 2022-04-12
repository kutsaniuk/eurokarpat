<template>
  <div>
    <TheAdminMembersAddEdit/>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    components: {
      TheAdminMembersAddEdit: () => import("@/components/admin/members/TheAdminMembersAddEdit.vue")
    }
  };
</script>
