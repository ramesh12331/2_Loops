//second largest number in an array

let arr = [14, 9, 0, 12,20, 10, 8,7,1,20]

function SecondLargestNum(arr){
    // if(arr.length<2){
    // return null;
    // }

    let firstLergest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>firstLergest){
            secondLargest=firstLergest;
            firstLergest=arr[i];
        }else if(arr[i]>secondLargest && arr[i] !== firstLergest){
            secondLargest=arr[i]
        }
    }
    return secondLargest;
}

let result = SecondLargestNum(arr)
console.log(result)

//Note: Corner cases
// 1.Array is Empty
// 2.Array has negative number
// 3.Array has duplicate