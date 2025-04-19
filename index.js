"use strict";
import {provinces} from './data/provinces.js';
import {names} from './data/names.js';
import {products} from './data/products.js';

/*------------------------------------------------Exercises-----------------------------------------------------------------------------*/

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".

// -> Log Each Name
console.log(`\nLog Each Name\n-----------------------------------------------------\n`);
names.forEach(name => console.log(name));  

//-> Log Each Province
console.log(`\nLog Each Province\n-----------------------------------------------------\n`);
provinces.forEach(province => console.log(province)); 

//-> Log each name with a matching province
console.log(`\nLog Each Name to Province\n-----------------------------------------------------\n`);
names.forEach((name, i) => console.log(`${name} (${provinces[i]})`)); 

// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console
const provincesUpperCase = provinces.map(province => province.toUpperCase());
console.log(`\nLog Each Province to Upper Case\n-----------------------------------------------------\n`, provincesUpperCase);

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.
const nameLengths = names.map(name => name.length);

// 4. **Sorting**: Use `sort` to alphabetically sort the provinces. 
const provincesSort = [...provinces].sort(); // Create a sorted copy of the provinces array without mutating the original

// 5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.
const provinceFilter = provinces.filter(province => !province.includes("Cape")).length;
console.log(`\nLog Count of Provinces without 'Cape'\n-----------------------------------------------------\nRemaining Count: `, provinceFilter);

// 6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.
const findingS = names.map(name =>
  name.toLowerCase().split('').some(char => char === 's')
);

// 7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.
const nameProvinceMap = names.reduce((acc, name, i) => { acc[name] = provinces[i]; return acc; }, {});


/*----------------------------------------Advanced Exercises (Single `console.log` Execution)-----------------------------------------------------------------------------*/

//1. **Log Products**: Iterate over the products array, logging each product name.
console.log(`\nLog Each Product Name\n-----------------------------------------------------\n`, 
  products.map(product => product.product));

//2. **Filter by Name Length**: Filter out products with names longer than 5 characters.
console.log(`\nLog Products with Name Length Less Than or Equal to 5\n-----------------------------------------------------\n`, 
    products.filter(product => product.product.length <= 5));

//3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.
console.log(`\nTotal Price of Products\n-----------------------------------------------------\n`, 
    products
      .filter(p => p.price && !isNaN(p.price))              // Remove empty/invalid prices
      .map(p => Number(p.price))                            // Convert to numbers
      .reduce((total, price) => total + price, 0)           // Calculate total price
);

//4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.
console.log(`\nLog Concatenated Product Names\n-----------------------------------------------------\n`, 
    products.reduce((acc, p) => acc + p.product, ''));

//5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
console.log(
  `\nFind Highest and Lowest Priced Products\n-----------------------------------------------------\n`,
  (() => {
    const validPrices = products
    .filter(p => typeof p.price === 'number' || (typeof p.price === 'string' && p.price.trim() !== '' && !isNaN(p.price)))
    .map(p => ({ product: p.product, price: Number(p.price) }));

    const highest = validPrices.reduce((a, b) => (a.price > b.price ? a : b));
    const lowest = validPrices.reduce((a, b) => (a.price < b.price ? a : b));

    return `Highest: ${highest.product}. Lowest: ${lowest.product}.`;
  })()
);

//6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values.
console.log(`\nLog Object Transformation\n-----------------------------------------------------\n`, 
  // Destructuring: [_, { product, price }] -    
  Object.entries(products).reduce((acc, [_, { product, price }]) => {
      acc.push({ name: product, cost: price });
      return acc;
    }, [])
);
