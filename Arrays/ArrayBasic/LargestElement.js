function largestElement(arr){
   let largestElement = 0;
   for(let i = 0;i<arr.length;i++){
    if(arr[i]>largestElement){
        largestElement = arr[i];
    }
   }
   return largestElement;
}

console.log(largestElement([1,22,343,45,656,45,454]))