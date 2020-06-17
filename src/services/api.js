export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const result = await data.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // implement here
}
