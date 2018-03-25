import Vue from 'vue'
import ProductList from './components/ProductList'

window.app = new Vue({
  el: '#app',
  components: { ProductList },
  data: {
    state: {
      title: 'Goat Store'
    }
  },
  render (createElement) {
    return createElement(
      'product-list',
      {
        props: {
          state: this.state
        }
      }
    )
  }
})
