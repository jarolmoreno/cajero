function formula1() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadt);
    document.getElementById('c2').value = (cantidad2 + cantidadt);
}

function formula2() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadt);
    document.getElementById('c2').value = (cantidad2 - cantidadt);
}

function formula3() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 + cantidadt);
    
}

function formula4() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 + cantidadt);
    
}

function formula5() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c1').value = (cantidad1 - cantidadt);
    
}

function formula6() {
    var cantidadt = parseInt(document.getElementById('cant').value);
    var cantidad1 = parseInt(document.getElementById('c1').value);
    var cantidad2 = parseInt(document.getElementById('c2').value);
    document.getElementById('c2').value = (cantidad2 - cantidadt);

}