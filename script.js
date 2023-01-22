let screen = document.getElementById('calcscreen');
screen.value = '';
let firstInput = true;
let result = 0;

function acclearscreen(){
    screen.style.color = "white";
    screen.value = '';
}

function input(value1){
        if(firstInput==true || screen.value==''){
            acclearscreen();
            firstInput = false;
        }
        if(!isNaN(value1)){
            screen.value = screen.value + value1;
        }
}


function addition(){
    screen.style.color = "white";
    if(screen.value == ''){
        screen.value =  '0 + ';
        firstInput = false;
    }
    else{
        screen.value = screen.value + ' + ';
    }
}
function subtraction(){
    screen.style.color = "white";
    if(screen.value == ''){
        screen.value =  '0 - ';
        firstInput = false;
    }
    else{
        screen.value = screen.value + ' - ';
    }
}
function multiplication(){
    screen.style.color = "white";
    if(screen.value == ''){
        screen.value =  '0 * ';
        firstInput = false;
    }
    else{
        screen.value = screen.value + ' * ';
    }
}
function division(){
    screen.style.color = "white";
    if(screen.value == ''){
        screen.value =  '0 / ';
        firstInput = false;
    }
    else{
        screen.value = screen.value + ' / ';
    }
}
function negative(){
    screen.style.color = "white";
    screen.value = screen.value + ' * (-1) ';
}
function percentage(){
    result = eval(screen.value) / 100;
    screen.value = result;
    screen.style.color = "cyan";
}
function screenequals(){
    result = eval(screen.value);
    screen.value = result;
    screen.style.color = "cyan";
}
