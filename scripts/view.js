export function renderProductCard(product) {
  // Get the container for products
  let productContainer = document.getElementById('productContainer')

  // Create a new card
  let card = document.createElement('div')
  let cardTitle = document.createElement('h2')
  let cardImage = document.createElement('img')
  let cardPrice = document.createElement('p')

  // Insert details into card from product object
  cardTitle.innerText = product.title
  cardImage.src = product.thumbnail
  cardPrice.innerText = product.price

  // Append items in card
  card.appendChild(cardImage)
  card.appendChild(cardTitle)
  card.appendChild(cardPrice)

  // Append card to DOM
  productContainer.appendChild(card)
}
