export async function getProducts() {
  let url = 'https://dummyjson.com/products'
  let res = await fetch(url)
  let data = await res.json()
  return data
}
