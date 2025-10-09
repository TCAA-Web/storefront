import { getProducts } from './api.js'
const productData = await getProducts()

export function renderProductCard(product) {
  // Get the container for products
  let productContainer = document.getElementById('productContainer')

  // Create a new card
  let card = document.createElement('div')
  let cardTitle = document.createElement('h2')
  let cardImage = document.createElement('img')
  let cardPrice = document.createElement('p')
  let buyButton = document.createElement('button')

  // Insert details into card from product object
  cardTitle.innerText = product.title
  cardImage.src = product.thumbnail
  cardPrice.innerText = product.price
  buyButton.innerText = 'Tilføj til kurv'

  card.classList.add('card')

  // Append items in card
  card.appendChild(cardImage)
  card.appendChild(cardTitle)
  card.appendChild(cardPrice)

  cardImage.addEventListener('click', () => renderProductDetails(product))

  // Append card to DOM
  productContainer.appendChild(card)
}

export function renderProductDetails(product) {
  let productContainer = document.getElementById('productContainer')
  resetProductContainer()
  setContainerClass('productDetailsContainer')

  // Create a new card
  let details = document.createElement('div')
  let detailsTitle = document.createElement('h2')
  let detailsImage = document.createElement('img')
  let detailsPrice = document.createElement('p')
  let detailsBackButton = document.createElement('button')
  let detailsDescription = document.createElement('p')

  // Insert details into card from product object
  detailsTitle.innerText = product.title
  detailsImage.src = product.thumbnail
  detailsPrice.innerText = product.price
  detailsDescription.innerText = product.description
  detailsBackButton.innerText = 'Go back'

  details.classList.add('productDetails')

  detailsBackButton.addEventListener('click', () => renderAllProducts())

  // Append items in card
  details.appendChild(detailsBackButton)
  details.appendChild(detailsImage)
  details.appendChild(detailsTitle)
  details.appendChild(detailsDescription)
  details.appendChild(detailsPrice)
  productContainer.appendChild(details)
}

export async function renderAllProducts() {
  resetProductContainer()
  setContainerClass('productContainer')
  productData.products.forEach((item) => {
    renderProductCard(item)
  })
}

export function resetProductContainer() {
  let productContainer = document.getElementById('productContainer')
  productContainer.innerHTML = ''
}

export function setContainerClass(className) {
  let productContainer = document.getElementById('productContainer')
  productContainer.classList.remove(...productContainer.classList)
  productContainer.classList.add(className)
}
