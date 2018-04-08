<template>
  <div class="product-list-item card d-flex align-items-stretch">
    <div class="card-body d-flex align-items-start flex-column">
      <h5 class="card-title">{{value.name}}</h5>
      <p class="card-text">{{value.price}}</p>
      <div class="mt-auto btn-group btn-group-sm" role="group" aria-label="Product actions">
        <button type="button" class="btn btn-default">View Details</button>
        <button type="button" class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .product-list-item {

  }
</style>

<script>
  export default {
    props: {
      value: {
        type: Object,
        required: true
      }
    }
  }
</script>
