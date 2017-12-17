function plus() {
    var num1, num2, result;
  
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
  
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    result = num1 + num2;
  
    document.getElementById('out').innerHTML = result;
}

function minus() {
     var num1, num2, result;
  
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
  
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    result = num1 - num2;
  
    document.getElementById('out').innerHTML = result;
}

function multiply() {
     var num1, num2, result;
  
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
  
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
  
    result = num1 * num2;
  
    document.getElementById('out').innerHTML = result;
}


function pow(a, n) {
    var b = a;
 
    for (var i = 1; i < n; i++) {
        b *= a;
    }
 
    return b;
}

alert(pow(2, 5));


function power(base, exp){
    var result = 1;
    for(var i = 0; i <exp; i++)
    {
        result = result * base;
    }
    return(result);
}
console.log(power(2,10));