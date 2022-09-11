// console.log("hello world");
/* 1. Write a program to create a Mathematical calculation table from 0 to given number n. */
/*
 function table(x,y){
     for(i=0;i<=y;i++){console.log(`${x} * ${i} = ${x*i}`)}
 }
 table(5,10)
 */

/* 2. Write a program to find the square of given number from 0 to n. */
/*
function square(n){
    for(i=1;i<=n;i++){console.log(`Square of ${i} is ${i*i} `)}
}
square(10)
 */

/* 3. 1. Create a basic calculator program using Javascript
   2. Use different arithmetic operators and variables to show working of calculator */

/*
let num1 = parseFloat(prompt('Enter num1: '));
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

/*   function verify(n)
   {
   return (n <= 2 ? false : (n % 2 == 0 ? true : false));
   }
   let n = 7;
   console.log((verify(n) ? "YES" : "NO"));
*/ 
/* 5. Given the length of three line segments as a, b, and c., Find if they can form a triangle or not? (Students are not expected to take any user input, solve the problem using hardcoded value)
Example-1 Input: a=7,b=10,c=5 Output: triangle  */

/*
  function checkIfTriangle(a, b, c)
   {
   if ( b + c <= a || a + c <= b || a + b <= c ) return false;
   else return true;
   }
   let a = 70, b = 7, c = 7 ;
   if (checkIfTriangle(a, b, c))
   console.log("Triangle");
   else
   console.log("Not Triangle");
*/
// checkIfTriangle(70,7,7)

/* 6. Write a function that takes two numbers x and y and calculates x^y */
/* 
function pow(x,y){ ans = Math.pow(x,y); console.log(ans) }
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

/*
function binomialCoefficient(num , k)
{
if (k > num) return 0;
if (k == 0 || k == num) return 1;
return binomialCoefficient(num - 1, k - 1) + binomialCoefficient (num - 1, k);
}
var num = 6, k = 3;
console.log(`Value of C(${num},${k}) is `+ binomialCoefficient(num, k));
*/

console.log("hello world");