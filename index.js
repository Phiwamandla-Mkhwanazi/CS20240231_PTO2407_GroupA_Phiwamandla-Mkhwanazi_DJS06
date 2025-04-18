//A list of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// A list of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

//A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


/* #### Exercises

1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".

2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

3. **Name Lengths**: Create a new array using `map` that contains the length of each name.

4. **Sorting**: Use `sort` to alphabetically sort the provinces. 

5. **Filtering Cape**: Use `filter` to remove provinces containing "Cape". Log the count of remaining provinces.

6. **Finding 'S'**: Create a boolean array using `map` and `some` to determine if a name contains the letter 'S'.

7. **Creating Object Mapping**: Use `reduce` to transform the names array into an object mapping names to their respective provinces.

#### Advanced Exercises (Single `console.log` Execution)
For these exercises, wrap your logic in a single `console.log` statement:

1. **Log Products**: Iterate over the products array, logging each product name.

2. **Filter by Name Length**: Filter out products with names longer than 5 characters.

3. **Price Manipulation**: Filter out products without prices, convert string prices to numbers, and calculate the total price using `reduce`.

4. **Concatenate Product Names**: Use `reduce` to concatenate all product names into a single string.

5. **Find Extremes in Prices**: Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."

6. **Object Transformation**: Using `Object.entries` and `reduce`, recreate the products object with keys 'name' and 'cost', maintaining their original values. */