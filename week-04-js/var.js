var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1,] Using control structures (if, for, while), do the following:

1. display in the console the numbers from 1 to 20

   for(var index = 0; index < 20; index ++ ) {
    console.log('repeta', index)
}

2. display in the console the odd numbers from 1 to 20

for(i = 0; i <= 20; i ++ ){
if(i%2 !=0){
    console.log(i);
}
}


3. compute the sum of the elements of an array and display it in the console

var array = [ 1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1,]
let sum = 0;
for(let i = 0; i < array.length; i ++){
    sum += array[i];
}
console.log(sum)



4.compute the maximum of the elements of an array and display it in the console


let max = array[1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1]
for (let i = 0; i < array.length; i ++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log(max)



5. compute how many times a certain element appears in an array - tips: use object, var element = 2.

var array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1,]

let result={};

for(let i = 0 ; i < array.length; i ++){
    if(!result[array[i]])
    result[array[i]] = 0;
    ++result[array[i]];

}
console.log(result)



6. Using nested control structures (doua for + if) for generate the following pattern

   0 1 0 1

   1 0 1 0

   0 1 0 1

   1 0 1 0


var array = [0, 1, 0, 1], [1, 0, 1, 0], [0, 1, 0, 1], [1, 0, 1, 0]



