// for loop(Iterating)
for (let i=1; i<=100; i++) {
    //15 is the lowest number that is divisible by 3 and 5.  For every number that is divisible by 15 FizzBuzz will be logged.
     if (i%15 == 0) {
        console.log("FizzBuzz");
     }
     //For every number that is divisible by 5 Buzz will be logged
     else if (i%5 == 0) {
        console.log("Buzz");
        }
    //For every number that is divisible by 3 Fizz will logged
     else if (i%3 == 0) {
     console.log("Fizz");
     }
     // Prints out numbers from 1-100 that are not divisible by 3 or 5.
     else {
     console.log(i);
     }
    }