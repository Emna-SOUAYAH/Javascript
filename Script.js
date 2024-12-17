/*Time for writing code !

Below the  instructions to follow to write some functions with JavaScript.

Do your best and share your work with your instructor ! 


Instructions

String Manipulation Functions:

Reverse a String: Write a function that reverses a given string.
Count Characters: Create a function that counts the number of characters in a string.
Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

Array Functions:

Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
Sum of Array: Create a function that calculates the sum of all elements in an array.
Filter Array: Implement a function that filters out elements from an array based on a given condition

Mathematical Functions:

Factorial: Write a function to calculate the factorial of a given number.
Prime Number Check: Create a function to check if a number is prime or not.
Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/

//Reverse a String: Write a function that reverses a given string.//

Function Reverseastring(string){
    var newstring=""

    for (var i = 0; i < string.length-1; i--) {
        
        newstring=newstring+string[i]
    }
    Return newstring

}

//Count Characters: Create a function that counts the number of characters in a string.//

Function countCharacter(string,value){
     Var Count=0

     for (let i = 0; i < String.length; i++) {
        count=count+str[i]
        Return Count
        
     }

}

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.//

Function CapitalizeWords(string){

var newstirng=""

     newstring.toUpperCase();

    
}


}

//Array Functions://

/*Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
Sum of Array: Create a function that calculates the sum of all elements in an array.
Filter Array: Implement a function that filters out elements from an array based on a given condition*/


///*Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.//

Function FindMaxMin ([array]){

    var min=0
    var max=0
    
    for (var i = 0; i < array.length; i++)
    
        ( var j = 0;j<array.length; j++)
        
        {
     if array[i] <arr[i+1]   
    
     min=array[i]
    }
    else if  array[j]>array[j+1]

    max=max +array[j]

    return min
    return max

}

//Sum of Array: Create a function that calculates the sum of all elements in an array.//


Function SumOfArray([arr]){

Var sum=0

for (let i = 0; i <= arr.length; i++) {
    

    sum=arr[i]+arr[i+1]
}

}

//Filter Array: Implement a function that filters out elements from an array based on a given condition//


Function filterArray([]){

    var newarray=[]
    
    for (let i = 0; i < array.length; i++) {
    if (array[i]%2===0) {

        newarray.push(array[i])

    }
    
    }
     }
    



     Mathematical Functions:

     /*Factorial: Write a function to calculate the factorial of a given number.
Prime Number Check: Create a function to check if a number is prime or not.
Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )*/


     /*Factorial: Write a function to calculate the factorial of a given number.*/

     Function Factorial(a){

        if (a===0 ; a===1)
            return 1
  for (let i = a-1; i <= 1; i--) {
    a=a*i
  }

  return a 
     }

    












