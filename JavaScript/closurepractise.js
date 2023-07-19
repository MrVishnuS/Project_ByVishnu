// function sum(a1){
//     return (a2)=>{
//         return(a3)=>{
//            return a1+a2+a3;
//         };
//     };
// };
// const result=sum(12)(24)(16);
// console.log(result);


// var a = "hello";
// var sum = 0;
// for(var i = 0; i < a.length; i++) {
//   sum += (a[i] - 'a');
// }
// console.log(sum);

function multiply(c) {
  return (a) => {
    return (b) => {
      return a * b * c;
    };
  };
};

multiply(2)(3)(4);
multiply();

// function nthMultiply() {}
// nthMultiply(1)(2)(); // =>2
// nthMultiply(2)(4)(6)(7)(8)();
// nthMultiply(2)(); // 2
// nthMultiply(1)(2)(3)(4)(6)(6)(7)();