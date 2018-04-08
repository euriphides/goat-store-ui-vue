<template>
  <div class="product-list row">
    <div
      v-for="item in products"
      :key="item._id"
      class="col-sm-6 col-lg-3 d-flex p-2"
    >
      <product-list-item
        :value="item"
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
      products: {
        type: Array,
        required: true
      }
    }
  }
</script>

