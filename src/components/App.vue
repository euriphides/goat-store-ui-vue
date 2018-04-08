<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>{{state.title}}</h1>
      </div>
    </div>
    <product-list
      :products="state.products"
    />
  </div>
</template>

<style lang="scss" src="bootstrap/scss/bootstrap.scss"></style>

<script>
  import ProductList from './ProductList'
  export default {
    components: {ProductList},
    props: {
      state: {
        type: Object,
        required: true
      }
    }
  }
</script>
