// TASK 1: CALCULATE AGE
var d = new Date();
var max_age = 100;

document.getElementById("currentYear").placeholder = d.getFullYear().toString();

// TASK 1: CALCULATE AGE
function calculateAge(){
    var birth = document.getElementById("birthYear").value;
    var current = document.getElementById("currentYear").value;

    emptyResult(1);

    if(checkEmpty(current)){
        current = d.getFullYear();
    }

    if(parseInt(birth) > current){
        document.getElementById("warning-task1").textContent = "Warning: Your birth year cannot be greater than current year. Please try again future man.";
    }
     else if(validateYear(birth) && validateYear(current)){
            emptyWarning(1);
           
            var age_1 = current - birth;
            var age_2 = age_1 - 1;
            document.getElementById("result1").textContent = "You are either " + age_1 + " or " + age_2 + " .";
            
    }
}

// TASK 2: CALCULATE LIFETIME SUPPLY
function calculateSupply(current_age, amount_per_day){
    var _age = current_age.value;
    var _amount = amount_per_day.value;
    emptyResult(2);
    if(validateSupply(_age) && validateSupply(_amount)){
        emptyWarning(2);
        var totalNeeded = (max_age - _age) * (_amount * 365);
        document.getElementById("result2").textContent = "You will need " + Math.round(totalNeeded) + " to last you until the ripe old age of " + max_age;
    }

}
// TASK 3: THE GEOMETRIZER
function calcCircumfrence(radius){
    var r = radius.value;
    emptyResult(31);

    if(validate(1, r)){
        var circumfrence = Math.PI * 2*r;
        document.getElementById("result31").textContent = "The circumference is " + circumfrence.toFixed(2) + " .";
    }
    
}

function calcArea(radius){
    var r = radius.value;
    emptyResult(32);

    if(validate(1, r)){
        var area = Math.PI *r*r;
        document.getElementById("result32").textContent = "The area is " + area.toFixed(2) + " .";
    }

}
// TASK 4: THE TEMPERATURE CONVERTER
function celsiusToFahrenheit(cel){
    var c = cel.value;
    emptyResult(41);

    if(validate(2, c)){
        var f = (c*9)/5 + 32;
        document.getElementById("result41").textContent = c + "°C is " + f.toFixed(2) + "°F.";
    }
}

function fahrenheitToCelsius(fah){
    var f = fah.value;
    emptyResult(42);

    if(validate(2, f)){
        var c = ((f - 32)*5)/9;;
        document.getElementById("result42").textContent = f + "°F is " + c.toFixed(2) + "°C.";
    }
}

// ADDITIONAL SUPPORTED FUNCTIONS------------------------------------------------------------------------------------
function checkEmpty(input){
    return (!input || 0 === input.strength);
}

function validateYear(input){
if(checkEmpty(input)){
    // textContent uses straight text, does not parse HTML, and is faster 
    document.getElementById("warning-task1").textContent = "Warning: Birth and current year must be filled.";
    return false;
}
else if(isNaN(input)){
    // check whether a value is NaN
        document.getElementById("warning-task1").textContent = "Warning: Make sure you input a number. We don't offer Math Operations within the input. ";
        return false;
    }
else if(input < 0){
    document.getElementById("warning-task1").textContent = "Warning: Birth and current year must be greater than 0.";
    return false;
}
else{
    return true;
}
}

function validateSupply(input){
    if(checkEmpty(input)){
        document.getElementById("warning-task2").textContent = "Warning: Amount and age must be filled.";
        return false;
    }
    else if(isNaN(input)){
        document.getElementById("warning-task2").textContent = "Warning: Make sure you input a number. We don't offer Math Operations within the input. ";
        return false;
    }
    else if(parseInt(input) > 100){
        document.getElementById("warning-task2").textContent = "Warning: At this age you cannot have enough teeth to eat snack honey.";
        return false;
    }
    else if(input < 0){
        document.getElementById("warning-task2").textContent = "Warning: Amount and age year must be greater than 0.";
        return false;
    }
    else{
        return true;
    }
    }

function validate(number, input){
    switch(number){
        case 1:
        emptyWarning(3);

        if(checkEmpty(input)){
            document.getElementById("warning-task3").textContent = "Warning: Radius must be filled.";
            return false;
        }
        else if(isNaN(input)){
            document.getElementById("warning-task3").textContent = "Warning: Make sure you input a number. We don't offer Math Operations within the input. ";
            return false;
        }
        else if(input < 0){
            document.getElementById("warning-task3").textContent = "Warning: Radius must be greater than 0.";
            return false;
        }
        else{
            return true;
        }
        break;
        case 2:
        emptyWarning(4);

        if(checkEmpty(input)){
            document.getElementById("warning-task4").textContent = "Warning: Degree must be filled.";
            return false;
        }
        else if(isNaN(input)){
            document.getElementById("warning-task4").textContent = "Warning: Make sure you input a number. We don't offer Math Operations within the input. ";
            return false;
        }
        else{
            return true;
        }
        break;
    }
}

function emptyWarning(number){
    document.getElementById("warning-task" + number).textContent = "";
}
function emptyResult(number){
    document.getElementById("result" + number).textContent = "";
}
