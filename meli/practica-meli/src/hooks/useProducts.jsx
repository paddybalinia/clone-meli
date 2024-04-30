// todo API

import respondeSeach from "../mocks/seachResult.json";

export function useProducts() {
  const products = respondeSeach.results;

  const mappedProducts = products.map((product) => ({
    id: product.id,
    title: product.title,
  }));

  return { product: mappedProducts };
}
