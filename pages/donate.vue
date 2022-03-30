<template>
  <div>
    <TheDonate/>
  </div>
</template>

<script>
  export default {
    components: {
      TheDonate: () => import("@/components/donate/TheDonate.vue")
    }
  };
</script>
