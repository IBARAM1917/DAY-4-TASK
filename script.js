//TASK 1 & 2
//Do the below programs in anonymous function & IIFE & arrow functions
// 1 Print odd numbers in an array
// USING ANNOYMOUS FUNCTION
var result=[];
var a=function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!==0){
            result.push(array[i]);
        }
    }
    return result

}
console.log(a([1,2,3,4,5,6,7,8,9]));
//USING IIFE FUNCTION
var results=[];
(function(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            results.push(arr[i]);
        }
    }
    console.log(results)

})([1,2,3,4,5,6,7,8,9])
// USING ARROW FUNCTION
var results=[];
var odd=(arr) =>{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            results.push(arr[i]);
        }
    }
    return results

}
console.log(odd([1,2,3,4,5,6,7,8,9]));
//2 Convert all the strings to title caps in a string array
// USING ANNOYMOUS FUNCTION
 function toTitleCase(str){
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
 }
 console.log(toTitleCase("welcome to MY home"));

 //USING IIFE FUNCTION
 (function (str) {
     str = str.toLowerCase().split(' ');
     for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
        console.log( str.join(' '));
    })("WELCOME To MY HOME");

 // USING ARROW FUNCTION
 var toTitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
   console.log(toTitleCase("welcome to MY home"));
           
//3 Sum of all numbers in an array
//USING ANNOYMOUS FUNCTION
var b= function(array){
  var sum=0;  
     for(var i=0;i<array.length;i++){
        sum+= array[i];

    }
    return sum;

}
console.log(b([1,2,3,4,5,6,7]));
//USING IIFE FUNCTION

(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum += array[i];
          }
          console.log(sum);
    })([1,2,3,4,5,6,7])
 // USING ARROW FUNCTION   
  sum=(array)=>{
    var sum=0;
    for(var i=0;i<array.length;i++){
        sum+=array[i];
    }
    return sum;
}
 console.log(b([1,2,3,4,5,6,7]));
 
 // 4 Return all the prime numbers in an array
 //USING ANNOYMOUS FUNCTION
 let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([1,2,3,4]));
//USING IIFE FUNCTION
(function (){
  var primeNum = [7, 16, 9, 3]
   primeNum = primeNum.filter(function(number) {
 for (var i = 2; i <= Math.sqrt(number); i++) {
 if (number % i === 0) return false;
}
  return true;
});
   console.log(primeNum);
  })();
// USING ARROW FUNCTION  
const newArray = [1,2,3,4];
const myPrimeArray = newArray.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);
// 5 Return all the palindromes in an array
//USING ANNOYMOUS FUNCTION
const isPalindrome = function () {
  const myArray = ["honds","rotator","deified","book"];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
}();
//USING IIFE FUNCTION
( function () {
  var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
  var arr = myArray.filter(function (c, d) {
    var palindrome = c.split('').reverse().join('');
    if (c == palindrome) {
      console.log(myArray[d]);
    }
  });
})();
// USING ARROW FUNCTION  
let input = [26,99,33,17,'kak','num','rotator','noon']
let palindrome = (input)=> {
    let i=0;
    let ans="";
    while(i<input.length) {
      let temp="";
      temp=temp+input[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+input[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return ans.trimEnd();
    }
    else
    {
        return 'No Palindrome found'
    }
}
console.log(palindrome(input));
//TASK 1
// 6 Return median of two sorted arrays of the same size.
let arr1=[1,5,9,12,15]
let arr2=[3,4,7,10,11]
let n = arr1.length;
let median = function(arr1, arr2, n) {
    let i=0;
    let j=0;
    let value1 =0;
    let value2 =0;
 for(let count=0; count<=n; count++) {
       if(arr1[i]<arr2[j])
      {
        value1=arr1[i];
        i++;
      }
      else if(arr1[i]>arr2[j])
      {
        value2=arr2[j];
        j++;
      }
      else if(arr1[i] === arr2[j])
      {
        value1=arr1[i];
        i++;
      }
    }
    return (value1+value2)/2;
}
if(arr1.length === arr2.length)
{
    console.log('Median is',median(arr1,arr2,n))
}
else
{
  console.log('Array size should be equal for programm run')
}
// 7 Remove duplicates from an array
//USING ANNOYMOUS FUNCTION
let findDuplicates = function () {
  
  const yourArray = [1, 1, 2,2, 3, 4, 5, 5]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates();
//USING IIFE FUNCTION
(function () {
  
  let numbers = [1, 2, 3,3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})();
// 8 Rotate an array by k times
//USING ANNOYMOUS FUNCTION
let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2);
//USING IIFE FUNCTION
(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)


