// 1: Write a function isAnagram which takes 2 parameters and returns true/false if those are anagrams or not.function isAnagram(str1, str2) {}
console.log("Question1");
function isAnagram(str1, str2) {
  // Remove non-alphabetic characters and convert to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();
  // Sort the characters of both strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   
console.log(isAnagram("rail safety", "fairy tales")); 


/* 2: Implement a function calculateTotalSpentByCategory which takes a list of transactions as parameter
and returns a list of objects where each object is unique category-wise and has total price spent as its value.
function calculateTotalSpentByCategory(transactions) {
  return [];
} */

  console.log("Question2");
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  transactions.forEach(transaction => {
      const { category, price } = transaction;

      // If the category already exists in the object, add the price to the existing total
      if (categoryTotals[category]) {
          categoryTotals[category] += price;
      } else {
          // If the category does not exist, create a new entry with the price
          categoryTotals[category] = price;
      }
  });

  // Convert the categoryTotals object to an array of objects
  const result = Object.keys(categoryTotals).map(category => {
      return {
          category: category,
          totalSpent: categoryTotals[category]
      };
  });

  return result;
}

// Example usage:
const transactions = [
  { category: "Food", price: 50 },
  { category: "Food", price: 30 },
  { category: "Vehicle", price: 20 },
  { category: "Entertainment", price: 15 },
  { category: "Vehicle", price: 10 }
];

console.log(calculateTotalSpentByCategory(transactions));


// 3: Write a function findLargestElement that takes an array of numbers and returns the largest element.
//function findLargestElement(numbers)
console.log("Question3");
function findLargestElement(numbers) {
  if (numbers.length === 0) {
      throw new Error("Array must not be empty");
  }
  
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }
  return largest;
}
// Example usage:
lst = [45,67,44,22,100]
console.log(findLargestElement(lst))


/* 4: Implement a function isPalindrome which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
  return true;
}*/
console.log("Question4");
  function isPalindrome(str) {
      // Remove non-alphanumeric characters and convert to lowercase
      const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      
      // Check if the cleaned string is the same forwards and backwards
      const reversedStr = cleanedStr.split('').reverse().join('');
      
      return cleanedStr === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("Radar"))
  console.log(isPalindrome("Darshil"));


  /* 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
function calculateTime(n) {
return 0.01;
}*/
console.log("Question5");
function calculateTime(n) {
  const startTime = performance.now(); // start calc of time

  let sum = 0; // sum the numbers
  for (let i = 1; i <= n; i++) {
      sum += i;
  }

  const endTime = performance.now(); // end calc of time

  // Calculate the time taken in seconds
  const timeTaken = (endTime - startTime) / 1000;

  return timeTaken;
}

// Example usage:
console.log(calculateTime(1000000));


/* 6: Implement a function countVowels that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
// Your code here
}
*/
console.log("Question7");
function countVowels(str) {
  // Define a set of vowels for quick lookup
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;
  
  str = str.toLowerCase();
  
  for (let char of str) {
      // If the character is a vowel, increment the counter
      if (vowels.has(char)) {
          count++;
      }
  }
  
  // Return the total count of vowels
  return count;
}

// Example usage:
console.log(countVowels("Hello, World!"));


/* 7: Write a function sumArray that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
  // Your code here
}
*/  
console.log("Question8");
function sumArray(numbers) {
  let sum = 0;
  
  for (let number of numbers) {
      sum += number;
  }
  
  return sum;
}

// Example usage:
console.log(sumArray([1, 2, 3, 4, 5]));


/* 8: Implement a function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
  // Your code here
}
*/
console.log("Question8");  
function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

// Example usage:
console.log(filterEvenNumbers([1, 2, 3, 4, 5]));


/* 9: Write a function findSmallestElement that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
  // Your code here
}
*/  
console.log("Question9");
function findSmallestElement(numbers) {
  if (numbers.length === 0) {
    return undefined; 
  }
  return Math.min(...numbers);//using spread operator
}

// Example usage:
console.log(findSmallestElement([10, 2, 3, 4, 5]));


/* 10: Create a function reverseString that takes a string and returns the string reversed.
function reverseString(str) {
  // Your code here
}
*/
console.log("Question10");
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example usage:
console.log(reverseString("Hello, World!"))


/* 11: Write a function fibonacci that takes a number n and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
  // Your code here
}
*/  
console.log("Question11");
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// Example usage:
console.log(fibonacci(10));


/* 12: Implement a function removeDuplicates that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
  // Your code here
}
*/ 
console.log("Question12"); 
function removeDuplicates(arr) {
  const result = [];
  const seen = {};

  for (let i = 0; i < arr.length; i++) {
    if (!seen[arr[i]]) {
      result.push(arr[i]);
      seen[arr[i]] = true;
    }
  }

  return result;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10]))


/* 13: Write a function countOccurrences that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
  // Your code here
}
*/
console.log("Question13");
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(countOccurrences("Hello, World!", "o"))


/* 14: Create a function findCommonElements that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
  // Your code here
}
*/  
console.log("Question14");
function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

// Example usage:
console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))


/* 15: Implement a function sortStrings that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {  // Your code here }
*/

function sortStrings(arr) {
  return arr.sort();
}

// Example usage:
console.log(sortStrings(["apple", "banana", "cherry", "ball"]))
