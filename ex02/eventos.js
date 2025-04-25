// receber 3 valores e infoma se triangulo é equilatero, isoceles ou escaleno

let lado_a = Number(prompt('Lado A: '));
let lado_b = Number(prompt('Lado B: ')); 
let lado_c = Number(prompt('Lado C: '));

if(lado_a + lado_b > lado_c && lado_c + lado_b > lado_a && lado_a + lado_c > lado_b){
    alert('trinagulo possivel')
}
else{
    alert('impossivel')
}

if(lado_a === lado_b && lado_b === lado_c){
    alert('Triângulo equilátero!');
}
else if(lado_a === lado_b || lado_b === lado_c || lado_c === lado_a){
    alert('Triângulo Isoceles');
}
else{
    alert('Escaleno');
}