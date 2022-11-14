let screen = document.getElementById('calcscreen')
let operand1 = 0;
let result = 0;
let operand2=0;

function acclearscreen(){
    screen.value = '';
}

function opclearscreen(){
    screen.value = '';
}

function input(value1){
        screen.value = screen.value + value1;
        //console.log(value1);
    
}


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
