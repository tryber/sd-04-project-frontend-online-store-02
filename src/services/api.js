export const getCategories = async () => {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories'
  );
  const data = await response.json();
  return data;
};

export const getItems = async (itemID) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${itemID}`);
  const data = await response.json();
  return data;
};

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const data = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
  );
  const result = await data.json();
  return result;
}
