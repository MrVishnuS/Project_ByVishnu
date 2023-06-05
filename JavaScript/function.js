(
    function callOnce(){
        console.log("hey Ram")
    }
)();
// callOnce();

// var callMe = ()=>{

// }

// Edge Case: 3

// const function1 = () => {
//   console.log("function1");
// };

// function function2() {
//   console.log("function2");
// }

// (
//   function2
// )(); // this will give you error

// (
//   function2
// )();// this will give you error
(function function2(a){
    console.log("function2",a);
}
)(233)