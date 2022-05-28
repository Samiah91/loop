//1
arr1= [3.14, "food", "pie", true, "food"];
arr2= [4, 1, 5, 7, 2];
function alwaysHungry(arr) {
    var out;            
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]=="food"){   
            out="yummy"; 
            console.log(out);      
        }
        else{
            out ="I'm hungry";
            a= out;
        }
    }return a;
}
console.log("Always Hungry")
alwaysHungry(arr1);
console.log(alwaysHungry(arr2));


// 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0 ; i<arr.length ; i++){
        if(arr[i] > cutoff){
            filteredArr.push (arr[i])
        }
    }return filteredArr;
}
console.log("High Pass Filter")
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 


//3
function betterThanAverage(arr) {
    var sum = 0;
    for(i=0 ; i<arr.length ; i++){
        sum = sum+arr[i];
    }
    average = sum/i;
    var count = 0
    for(i=0 ; i<arr.length ; i++){
        if(arr[i]> average){
            count=count+1;
        }
    }
    // console.log(average)
    // console.log(sum)
    return count;
}
console.log("Better than average");
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//4
function reverse(arr) {
    var newarr=[];
    for(var i= arr.length-1 ; i>=0 ; i--){
        newarr.push(arr[i]);
    }return newarr;
}
console.log("Array Reverse");
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//5
function fibonacciArray(n) {
    
    var fibArr = [0, 1];
    while (n > 0){
        temp = fibArr[0];
        fibArr[0] = fibArr[0] + fibArr[1];
        fibArr[1] = temp;
        n--;
        console.log(temp)
        }
    return temp;
}
    
var result = fibonacciArray(10);
console.log(result); 
