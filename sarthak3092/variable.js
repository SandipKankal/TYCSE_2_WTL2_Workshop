//1. var ****************
/*
    var tester = "hey hi";
    function newFunction() {
        var hello = "hello";
        console.log(hello)
    }
    newFunction()
    //console.log(hello); // error: hello is not defined
    //variable can be redeclared
    var greeter = "hey hi";
    var greeter = "say Hello instead";
    greeter="hello again"
    console.log(greeter)
    //hoisting of var
    console.log (message); //hoisting.. the variable is declared automatically before the usage
                           //the value is undefined.
    var message = "Sample message"
    //problem with the var.. the variable can be redeclared creating confusions
    var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead" ... expecting value of local variable
*/
//2. let
    //block scoped... removes the issues of var 
    let greeting = "say Hi";
    let times = 4;

    if (times > 3) {
     let greeting = "say Hello instead";
     console.log(greeting);// "say Hello instead"
    }
    console.log(greeting) // hello is not defined

    //can be updated by cannot be redeclared
    
    let x = "say Hi";
    x = "say Hello instead";//can not use let x as already declared. 

    //hoisting approach 
    //console.log(y) //this will fail at runtime. The variable is hoisted but not initialized
    let y="anything"
//3. const
    //block scoped similar to var and let
    //cannot be redeclared or reinitiazlied

    const greeting1 = "say Hi";
    //greeting1 = "say Hello instead";// error: Assignment to constant variable. 

    //creating and updating constant object
    const mygreeting = {
        message: "say Hi",
        times: 4
    }
    // the following code fails
    // mygreeting={
    //     message:"say bye",
    //     times:10
    // }

    //following works
    mygreeting.message="welcome"