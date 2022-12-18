function leftRotateArray(arr){
    let last = arr[0]
    for(let i=0;i<arr.length - 1;i++){

        arr[i] = arr[i+1]
    } 
    arr[arr.length - 1] = last
    return arr

}

console.log(leftRotateArray([1,2,3,4,5]))