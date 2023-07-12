// let array1 =[1,2,3,4,56];
// function modifyAarray(arr){
//     let result, data=[];

//     const array=arr.filter((item)=>{
//         return item%2==0;
//     });
//     result = array;
//     result[...result, ...data];
// }
// console.log('hey', data)
// const result=modifyAarray1(array1)
// result[1]='nor';
// console.log(result1);
// console.log(array);


// let array = [1, 2, 3, 4, 56];

// function modifyArray(arr) {

// let result = [];

// for (let i = 0; i < arr.length; i++) {

// arr[i] = arr[i] * 2;

// }

// result = arr; // because you are trying to assign a new value to constant variable

// return result;

// }

// const result = modifyArray(array);

// result[1] = "Not A number";

// console.log(result); //

// console.log(array); //

let object = {
    name:'v'
}

function modifyArray(arr) {

let result = [];

for (let i = 0; i < arr.length; i++) {

arr[i] = arr[i] * 2;

}

result = arr; // because you are trying to assign a new value to constant variable

return result;

}

const result = modifyArray(array);

result[1] = "Not A number";

console.log(result); //

console.log(array); //



