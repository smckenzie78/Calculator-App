let screen = document.getElementById('calcscreen')
let operand1 = 0;
let testvar = 6;
let opvar=0;
let result = 0;
let operand2=0;

function acclearscreen(){
    screen.value = '';
    operand1=0;
    testvar = 6;
}

function opclearscreen(){
    screen.value = '';
    testvar = 6;
}

function input(value1){
    if(testvar!==0 || (testvar == 6)){
        opclearscreen();
        operand2 =0;
        screen.value = screen.value + value1;
        //console.log(testvar);
        testvar=0;
        console.log(testvar);
    }
    else{
        screen.value = screen.value + value1;
        //console.log(value1);
    }
    
}

/*
Function: operator

Description: Handles all the operations such as add, subtract, etc.

Parameters: Takes in type of operation to use from html. Each type of operation gives "testvar" variable a different value.
1 = addition, 2 = subtraction, 3 = multiplication, and 4 = division. This is so that when you click the equals button,
it knows which operation to do.
*/

/*
function operator(op){
    if(op == "add"){
        if(testvar == 0){
            opvar=1;
            testvar=1;
            document.getElementById('addition').style.borderColor="darkgray";
            let operand2 = parseFloat(screen.value); //Saves new input into variable
            operand1 = operand1 + operand2;
            screen.value = operand1;
        }
    }
    if(op == "equals"){
        testvar=6;
        if(opvar==0){
            operand1 = parseFloat(screen.value);
            screen.value = operand1;
        }

        if(opvar==1){
            let operand2 = parseFloat(screen.value);
            operand1 = operand1 + operand2;
            screen.value = operand1;
            opvar=0;
            
        }
        
    }
}
*/

function addition(){
    screen.value = screen.value + ' + ';
}
function subtraction(){
    screen.value = screen.value + ' - ';
}
function multiplication(){
    screen.value = screen.value + ' * ';
}
function division(){
    screen.value = screen.value + ' / ';
}
function negative(){
    screen.value = screen.value + ' * (-1) ';
}
function percentage(){
    result = eval(screen.value) / 100;
    screen.value = result;
}
function screenequals(){
    result = eval(screen.value);
    screen.value = result;
}