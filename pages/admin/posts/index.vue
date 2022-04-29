<template>
  <div>
    <TheAdminPosts />
  </div>
</template>

<script>
import TheAdminPosts from '@/components/admin/posts/TheAdminPosts.vue'

export default {
	layout: 'admin',
	components: {
		TheAdminPosts
	}
}
</script>
