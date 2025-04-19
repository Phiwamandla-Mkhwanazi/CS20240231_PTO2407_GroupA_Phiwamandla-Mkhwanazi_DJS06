/** 
 * All Advanced Exercises Logic 
 * Import the seed data for products
 **/ 
import {products} from '../data/products.js';

//1. **Log Products**: Iterate over the products array, logging each product name.
export const productsArrayNames = products.map(p => p.product); //Extract an array of product names using map

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
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price))) //Filter out whitespaces
    .map(p => ({ product: p.product, price: Number(p.price) })); // Every remaining price is to be a number from the array.

    const highest = validPrices.reduce((a, b) => (a.price > b.price ? a : b)); // Get highest price
    const lowest = validPrices.reduce((a, b) => (a.price < b.price ? a : b));  // Get lowest price

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  });


//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
export const productsNameCost =   
    // Destructuring: [_, { product, price }] pulls values from the product object    
    Object.entries(products).reduce((acc, [_, { product, price }]) => {
    acc.push({ name: product, cost: price });
    return acc;
    }, []);


