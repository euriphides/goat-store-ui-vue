import Vue from 'vue'
import App from './components/App'

const host = process.env.API_HOST
const get = async (path) => {
  const requestAddress = host + path
  let result
  try {
    const response = await fetch(requestAddress)
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    result = await response.json()
  } catch (error) {
    console.error(`could not load: ${requestAddress}`, error)
  }
  return result
}

window.app = new Vue({
  el: '#app',
  components: { App },
  data: {
    state: {
      title: 'Goat Store',
      products: []
    }
  },
  async created () {
    const products = (await get('products')) || []
    this.state.products = products
    console.log('window.app.create:', {products})
  },
  render (createElement) {
    return createElement(
      'app',
      {
        props: {
          state: this.state
        }
      }
    )
  }
})
