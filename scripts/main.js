import { getProducts } from './api.js'
import { renderProductCard } from './view.js'

const productData = await getProducts()

productData.products.forEach((item) => {
  renderProductCard(item)
})

console.log(productData)
