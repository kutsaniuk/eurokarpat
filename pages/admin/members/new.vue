<template>
  <div>
    <TheAdminMembersAddEdit />
  </div>
</template>

<script>
import TheAdminMembersAddEdit from '@/components/admin/members/TheAdminMembersAddEdit.vue'

export default {
	middleware: 'auth',
	layout: 'admin',
	components: {
		TheAdminMembersAddEdit
	}
}
</script>
