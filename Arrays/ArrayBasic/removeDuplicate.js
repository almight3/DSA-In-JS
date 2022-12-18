function removeDuplicate(arr){
    let i = 0;
    for(let j=0;j<arr.length;j++){
        if(arr[j]!=arr[i]){
            i++;
            arr[i] = arr[j]
        }
    }
    return arr
}

console.log(removeDuplicate([1,2,2,2,4,4,4,5,5]))