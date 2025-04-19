import {products} from './data/products.js';

export const getProductNames = (products) => products.map(p => p.product);

export const filterShortNames = (products) =>
  products.filter(p => p.product.length <= 5);

export const getTotalPrice = (products) =>
  products
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price)))
    .map(p => Number(p.price))
    .reduce((total, price) => total + price, 0);

export const getHighestLowest = (products) => {
  const valid = products
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price)))
    .map(p => ({ product: p.product, price: Number(p.price) }));

  const highest = valid.reduce((a, b) => a.price > b.price ? a : b);
  const lowest = valid.reduce((a, b) => a.price < b.price ? a : b);

  return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
};

export const transformToNameCost = (products) =>
  Object.entries(products).reduce((acc, [_, { product, price }]) => {
    acc.push({ name: product, cost: price });
    return acc;
  }, []);
