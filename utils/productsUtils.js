import {products} from '../data/products.js';

//1. **Log Products**: Iterate over the products array, logging each product name.
export const productsArrayNames = products.map(p => p.product);

//2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
export const productsShortNames = products.filter(p => p.product.length <= 5);

//3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
export const productsTotalPrice = 
    products.filter(p => p.price && !isNaN(p.price))   // Remove empty/invalid prices
    .map(p => Number(p.price))                            // Convert to numbers
    .reduce((total, price) => total + price, 0);          // Calculate total price


//4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
export const productsConcatenateNames = products.reduce((acc, p) => acc + p.product, '');


//5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
export const productsHighestLowest = (() => {
    const validPrices = products
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price)))
    .map(p => ({ product: p.product, price: Number(p.price) }));

    const highest = validPrices.reduce((a, b) => (a.price > b.price ? a : b));
    const lowest = validPrices.reduce((a, b) => (a.price < b.price ? a : b));

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  });


//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
export const productsNameCost =   
    // Destructuring: [_, { product, price }] -    
    Object.entries(products).reduce((acc, [_, { product, price }]) => {
    acc.push({ name: product, cost: price });
    return acc;
    }, []);


