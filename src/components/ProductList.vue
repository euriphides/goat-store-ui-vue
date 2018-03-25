<template>
  <div>
    <h1>{{state.title}}</h1>
    <div class="list">
      <product-list-item
        v-for="item in state.products"
        :value="item"
        :key="item._id"
      />
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import ProductListItem from './ProductListItem'

  export default {
    components: {
      ProductListItem
    },
    props: {
      state: {
        type: Object,
        required: true
      }
    }
  }
</script>

