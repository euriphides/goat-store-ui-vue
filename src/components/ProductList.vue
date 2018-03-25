<template>
  <div>
    <h1>{{state.title}}</h1>
  </div>
</template>

<style scoped>

</style>

<script>
  export default {
    props: {
      state: {
        type: Object,
        required: true
      }
    }
  }
</script>

