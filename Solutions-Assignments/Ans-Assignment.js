// console.log("hello world");
/* 1. Write a program to create a Mathematical calculation table from 0 to given number n. */
/*function table(x,y){
     for(i=0;i<=y;i++){console.log(`${x} * ${i} = ${x*i}`)}
 }
table(5,10)
*/

/* 2. Write a program to find the square of given number from 0 to n. */
/*function square(n){
    for(i=1;i<=n;i++){console.log(`Square of ${i} is ${i*i} `)}
}
square(10)
 */

/* 3. 1. Create a basic calculator program using Javascript
      2. Use different arithmetic operators and variables to show working of calculator */

/*let num1 = parseFloat(prompt('Enter num1: '));
let num2 = parseFloat(prompt('Enter num2: '));
const operation = prompt('Select the operator in prompt (+, - , * , /): ');
let result;
   if (operation == '-') {result = num1 - num2;}
   else if (operation == '+') {result = num1 + num2;}
   else if (operation == '/') {result = num1 / num2;}
   else {result = num1 * num2;}
console.log(`${num1} ${operation} ${num2} = ${result}`);
*/

/* 4. Given `n` pieces of sweet, help Peter and John divide it among themselves such that both get an equal number of sweets. Note that the sweet can not be broken into sub-pieces. You have to tell if it is possible to make such distribution or not based upon n number of pieces. I.e., possible outputs: `yes` or `no.`
   Example-1 Input: 8 Output: Yes
   Example-2 Input: 7 Output: No */

/*function verify(n){
   return (n <= 2 ? false : (n % 2 == 0 ? true : false));
  }
let n = 7;
console.log((verify(n) ? "YES" : "NO"));
*/ 

/* 5. Given the length of three line segments as a, b, and c., Find if they can form a triangle or not? (Students are not expected to take any user input, solve the problem using hardcoded value)
Example-1 Input: a=7,b=10,c=5 Output: triangle  */

/*function checkIfTriangle(a, b, c){
   if ( b + c <= a || a + c <= b || a + b <= c ) return false;
   else return true;
   }
   let a = 70, b = 7, c = 7 ;
   if (checkIfTriangle(a, b, c))
   console.log("Triangle");
   else
   console.log("Not Triangle");
// checkIfTriangle(70,7,7)
*/

/* 6. Write a function that takes two numbers x and y and calculates x^y */

/* function pow(x,y){ ans = Math.pow(x,y); console.log(ans) }
pow(2,3)
function XpowY(x, y)
{
let ans = 1;
for(let i = 0; i < y; i++)
ans = (ans * x);
return ans;
}
let x = 4;
let y = 4;
console.log(XpowY(x, y));
*/

/* 7. Write a function that takes two parameters num and k and returns the value of Binomial Coefficient
C(num, k) 
Sample input: num = 6, k = 3
Sample output: 20
Binomial Coefficient (n,k) = n! /k!(n-k)!       */

/*function binomialCoefficient(num , k)
{
if (k > num) return 0;
if (k == 0 || k == num) return 1;
return binomialCoefficient(num - 1, k - 1) + binomialCoefficient (num - 1, k);
}
var num = 6, k = 3;
console.log(`Value of C(${num},${k}) is `+ binomialCoefficient(num, k));
*/

/* 8. Given a number n, calculate n! Factorial 3!=3*2*1 
Example-1: Input: 3, Output: 6
Example-2: Input: 5, Output: 120       */

/*function factorial(n) {
   if (n == 0) return 1;
   return n * factorial(n - 1);
   }
   let num = 3;
   console.log(`Factorial of ${num} is ` + factorial(num));
*/

/* 9. Given an integer n, write a function that returns the count of trailing zeroes in n!.
Example-1: Input: 5, Output: 1      */

/*function findTrailingZeros(n){
if(n < 0)
return -1;
let count = 0;
for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
count += Math.floor(n / i);
return count;
}
let n = 25;
console.log("Count of trailing 0s in " + 100 + " is " + findTrailingZeros(n))
*/

/* 10. Given an array of length N, where every element is present twice and only one element is present once. Find the unique element
Input: N = 5, Array = [3,2,1,2,3], Output: 1
 */

/* function findSingle(arr, N) {
   // Do XOR of all elements and return
   let res = arr[0];
   for (let i = 1; i < N; i++)
   res = res ^ arr[i];
   return res;
}
let Array = [3,2,1,2,3];
let N = 5;
console.log("Element occurring once is " + findSingle(Array, N));
*/

/* 11. Find the pair of elements in a given array A such that the sum of the pair is equal to N
Input: A = [10, 20, 10, 40, 50 , 70], N=50 ,Output: 2,3
 */

/* function sumOfPair(num, target_num) {
   var map = [];
   var indexes = [];
   for (var idx = 0; idx < num.length; idx++){
      if (map[num[idx]] != null){
      var index = map[num[idx]];
      indexes[0] = index;
      indexes[1] = idx;
      break;}
      else{map[target_num - num[idx]] = idx;}
   }
   return indexes;
}
console.log(sumOfPair([40,20,10,40,50,60,70],50));
*/

/* 12. A subarray of an array is defined as the contiguous cross section of the array.
Example: [1,2,3] has the following subarrays: [1],[2],[3],[1,2],[2,3].[1,2,3]
Given an array print all the subarrays of the given array
Example-1 Input: [1,2,3] Output: [1],[2],[3],[1,2],[2,3].[1,2,3] */

/* //solution:1
function subArray(n) {
   for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
         let subArray=[];
         for (let k = i; k <= j; k++)
            subArray.push(arr[k])
            console.log(subArray);
      }
   }
}
let arr = [1, 2, 3];
subArray(arr.length) 
//solution:2
let array = [1, 2, 3]

for (let i = 0; i <= array.length; i++) {
    for (let left = 0, right = i; left < array.length, right < array.length; left++, right++) {
        console.log(array.slice(left, right + 1))
    }
}
*/

/* 13. You have an array of n elements. Your job is to find the element that is in majority.
Any element whose count is greater than n/2 will be considered as a majority element.
Example-1: Input: [3,1,3,3,2] Output: 3       */

/*function findMajority(arr, n){
   let maxCount = 0;
   let index = -1;
   for(let i = 0; i < n; i++){
      let count = 0;
         for(let j = 0; j < n; j++){
            if (arr[i] == arr[j])
            count++;
         }
         if (count > maxCount){
            maxCount = count;
         index = i;
      }
   }
   if (maxCount > n / 2)
   // document.write(arr[index]);
   console.log(arr[index]);
   else
   // document.write("No Majority Element");
   console.log("No Majority Element");
}
let arr = [3,1,3,3,2];
let n = arr.length;
findMajority(arr, n);
*/

/*14. Find the intersection of two sorted arrays. OR in other words, Given 2 sorted arrays, find all the  elements which occur in both the arrays. 
Input: A: [1 2 3 3 4 5 6] B: [3 3 5]  Output: [3 3 5] */

/*function printIntersection(arr1, arr2, m, n) {
   var i = 0,j = 0;
      while (i < m && j < n) {
         if (arr1[i] < arr2[j]) i++;
         else if (arr2[j] < arr1[i]) j++;
         else {
            console.log(arr2[j++] + " ");
            i++;
         }
      }
   }
var arr1 = [1, 2, 3, 3, 4, 5, 6];
var arr2 = [1,3, 3, 5];
var m = arr1.length;
var n = arr2.length;
printIntersection(arr1, arr2, m, n);
*/

/*15. Given an array A of N non-negative numbers and you are also given non-negative number B. You  need to find the number of subarrays in A having sum less than B. Assuming no overflow.
Input: A = [2, 5, 6] , B=10  Output: 4  */

/* //??
function countSubarray(arr, n, B) {
   var count = 0;
   for (i = 0; i < n; i++) {
      var sum = 0;
      for (j = i; j < n; j++) {
         if (sum + arr[j] < B) {
         console.log(arr[i]+"+"+arr[j]);
         sum = arr[j] + sum;
         count++;
         }
         else {break;}
      }
   }
return count;
}
let A = [2, 5, 6];
var B = 10;
var size = A.length;
var count = countSubarray(A, size, B);
console.log(count);
*/

console.log("hello world");
/* 16. Given an array of integers A count the pairs (A[i], A[j]) such that the following conditions are met:
LCM(A[i],A[j]) = 2GCD(A[i],A[j]) where i,j are from 1 to N(both inclusive)
(A[i],A[j]) = A[j],A[i];
Input: [2,3,4] Output: 1 */

/* wrong function findSingle(arr, N) {
   // Do XOR of all elements and return
   let res = arr[0];
   for (let i = 1; i < N; i++)
   res = res ^ arr[i];
   return res;
}
let Array = [3,2,1,2,3];
let N = 5;
console.log("Element occurring once is " + findSingle(Array, N));
*/

/*17. Given a grid of size NxM, K cells have plants while remaining have weeds. Your job is to lay fence on the grid such that the following conditions are met:
If adjacent cells are plants no need to put fence between them
If adjacent cell is of weed, then put a fence
Note: Cells are said to be adjacent if they share the same boundary.
And building of fences can happen on cell boundaries.So now the total length of constructed fence will be calculated as count of pairs of the side adjacent cells such that there is a fence built on there common side on sides of cells. On the grid boundary.Which have fences built on them. Find the minimum required length of the total length of fences that needs to be built.
Input: n = 4; m = 4; k = 1; arr = [[1,1]]; Output: 20 4 */

/*function sumOfPair(nums, target_num) {
   var map = [];
   var indexes = [];
   for (var idx = 0; idx < nums.length; idx++)
   {
   if (map[nums[idx]] != null)
   {
   var index = map[nums[idx]];
   indexes[0] = index;
   indexes[1] = idx;
   break;
   }
   else
   {
   map[target_num - nums[idx]] = idx;
   }
   }
   return indexes;
   }
   console.log(sumOfPair([10,20,10,40,50,60,70],50));

   // binary search 
   let binarySearch = function (arr, findNumber, start, end) {
    if (start > end) return;
 
    let mid = Math.floor((start + end) / 2);
 
    if ((arr[mid] + arr[mid -1] === findNumber) || (arr[mid] + arr[mid +1] === findNumber)) {
        if ((arr[mid] + arr[mid -1] === findNumber)) {
            return [arr[mid], arr[mid-1]];
        }
        else {
            return [arr[mid], arr[mid+1]];
        }
    }
 
    if ((arr[mid] + arr[mid -1] > findNumber) || (arr[mid] + arr[mid +1] > findNumber)) {
      return binarySearch(arr, findNumber, start, mid - 1);
    } else {
      return binarySearch(arr, findNumber, mid + 1, end);
    }
  };
 
  let arr = [1, 3, 4, 5, 7, 10, 11, 12];
  let findNumber = 4;
 
  console.log(binarySearch(arr, findNumber, 0, arr.length - 1).join(' '));


*/
/* */
// function sumOfPair(nums, target_num) {
//    var map = [];
//    var indexes = [] ;
//    for (var idx = 0; idx < nums.length; idx++)
//    {
//    if (map[nums[idx]] != null)
//    {
//    var index = map[nums[idx]];
//    indexes[0] = index;
//    indexes[1] = idx;
//    break;
//    }
//    else
//    {
//    map[target_num - nums[idx]] = idx;
//    }
//    }
//    return indexes;
//    }
//    console.log( "this is ans " + sumOfPair([10,20,10,40,50,60,70],130) );



