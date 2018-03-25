<template>
  <div class="product-list-item">
    <p class="title">
      <span class="name">{{value.name}}</span>
      <span class="price">{{value.price}}</span>
    </p>
  </div>
</template>

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
