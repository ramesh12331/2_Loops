//


function searchElement(arr,x){
    for(let i=0; i<arr.length; i++){
        if(arr[i]==x){
            return i;
        }
    }

    return -1
}

let arr = [4, 2, 0, 10, 8, 30];

let result = searchElement(arr,10);
console.log(result)