//find the largest number in an array

let arr = [5, 0, 7, 10, 8, 17,1]

function findLargest(arr){
    // let largest = -1;
    // let largest = arr[0];
    let largest = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

let result = findLargest(arr)
console.log(result)