<template>
  <div>
    <TheAdminPostsAddEdit />
  </div>
</template>

<script>
import TheAdminPostsAddEdit from '@/components/admin/posts/TheAdminPostsAddEdit.vue'

export default {
	middleware: 'auth',
	layout: 'admin',
	components: {
		TheAdminPostsAddEdit
	}
}
</script>
