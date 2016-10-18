"use strict"
const reverse = function reverse(arr) {

    let reverseList = [];

    for (let i = arr.length - 1; i>=0; i--) {

        reverseList.push(arr[i]);

    }

    return reverseList;

};

const reverseArray = reverse([1,2,3,4,5]);

console.log(reverseArray);