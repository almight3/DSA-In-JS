//<=========== Brute Force solution ==================>

// function rotateArrayByKElement(arr,k){
//     let newArr = []
//     let j = 0
//    for(let i=k+1 ; i<arr.length;i++){  
//     newArr[j] = arr[i] 
//     j++
         
//    }
//    for(let i = 0;i<k;i++){
//     newArr[j+i] = arr[i]
//    }
//    return newArr
// }
// //[1,2,3,4,5,6,7,8] k=3 [3,4,5,6,7,8,1,2,3]

// console.log(rotateArrayByKElement([1,2,3,4,5,6,7],3))

//<========== Optimized solution ===================>
// aproch 1 stack 

// function rotateArray(arr,k){
//     for(let i=0;i<k;i++){
//         arr.unshift(arr.pop())
//     }
//     return arr
// }
// // 
// console.log(rotateArray([1,2,3,4,5,6,7],3))

// approach2 

// function rotateArray(arr,k){
//      swap(arr,0,k)
//      swap(arr,k+1,arr.length - 1)
//      swap(arr,0,arr.length - 1)
//      return arr       
// }

// function swap(arr,start,end){
//    while(start<end){
//      let temp = arr[start];
//      arr[start] =  arr[end];
//      arr[end] = temp
//      start++;
//      end--;
//    }
// }

console.log(rotateArray([1,2,3,4,5,6,7],3))
