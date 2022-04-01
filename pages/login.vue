<template>
  <div>
    <TheAuthLogin/>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    components: {
      TheAuthLogin: () => import("@/components/auth/TheAuthLogin.vue")
    }
  };
</script>
