//function decleration
// function greeting(){
//     console.log("Welcome to the class")
// }
// greeting()

// let a = 100
// function x(){
//     console.log(a)
// }
// x()


// let a=10
// function x(){
//     let a=20
//     console.log(a)
// }
// x()



//lexical scoping
let a=30
function x(){
    
    function y(){
        
        function z(){
            l
            console.log(a)
        }
        z()


    }
    y()
}
x()

function sum(num1,num2){
    return (num1+num2)
}
console.log(sum(5,10))