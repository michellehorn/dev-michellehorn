<template>
  <div class="home text-center">
   <Title/>
  </div>
</template>

<script>
import Title from '@/components/Title';

export default {
  name: "home",
  components: {
    Title
  },
  data: () => ({
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'Angular',
      'Vuejs'
    ]
  })
};
</script>
<style lang="scss" scoped>
</style>

