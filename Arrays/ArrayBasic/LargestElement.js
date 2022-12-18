// largest element

// function largestElement(arr){
//    let largestElement = 0;
//    for(let i = 0;i<arr.length;i++){
//     if(arr[i]>largestElement){
//         largestElement = arr[i];
//     }
//    }
//    return largestElement;
// }
// console.log(largestElement([1,22,343,45,656,45,454]))

// second largest element

function secondLargestElement(arr){
    let largestElement = 0;
    let secondLargestElement = 0;
    for(let i = 0; i<arr.length;i++){
     
        if(arr[i]>largestElement){
            largestElement=arr[i];
        }
        if(arr[i]>secondLargestElement && arr[i]<largestElement){
            secondLargestElement=arr[i]
        }
    }
    return secondLargestElement

}
console.log(secondLargestElement([1,22,343,45,656,45,454]))