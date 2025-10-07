import { getCategories, getProducts } from './api.js'
import { renderProductCard } from './view.js'

const productData = await getProducts()

productData.products.forEach((item) => {
  renderProductCard(item)
})

const categories = await getCategories()

console.log(categories)
console.log(productData)
