//what if you provide parameters properly 

function add(num1, num2){
    //normally it return NaN if you dont provide the 2nd parameter
    
    //if is a way to solve that problem
    // if(num2== undefined){
    //     num2 = 0;
    // }

    //another way is || is for OR 
    num2 = num2 || 20;

    return num1 + num2;
}

//but the es6 solution is to assign a default value while declaring the function which is given below
function addES6(num1, num2=20){
    return num1 + num2;
}


let val = addES6(15, 5);
console.log(val);