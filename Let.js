//Let declaration deeclares the re-assignable and block-scoped variable
Case : 1

let x = 10
if(x==10){
   let x=2;
    console.log(x);// Output:2
}
console.log(x);//Output : 10

/*
    Inside the if block , the value of x is being assinged  to 2 and it remains same inside the same block
    as the variable assigned by let inside the block hasnt been affected the out variable declarion of the 
    same variable with same name
    
    Any operations performed inside the block on a vairable declared by let has no efffect on the varibales
    declared  out the block.
*/

Case :2
// 1.Let Declartions are scoped to blocks and functions

// 2.Unlinke var, in order to access the let declaration , we need to declare them first before using them 
function f(){
    console.log(a)//ReferenceError: Cannot access 'a' before initialization
    let a = 1;
}
f();
//3.Variables declared by let are not prefered to use as global variables

//4.Let declarations cannot be declared by any other declaration in the same scope
var ab =10
if(ab==10){
    var d = 5;
    var d =6;
    console.log(d);//Output 6
}

var ab =10
if(ab==10){
    let d = 5;
    var d =6;
    console.log(d);//Identifier 'd' has already been declared
}


