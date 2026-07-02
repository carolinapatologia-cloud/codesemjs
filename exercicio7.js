let notas = [7, 4, 9, 6, 10];
let add = notas.map(p => p + 1);
let resultadofilter = notas.filter(n => n >= 7);
let resultadofind = notas.find(n => n < 5);
let soma = notas.reduce((total, n) => total + n);
console.log(add);
console.log(resultadofilter);
console.log(resultadofind);
console.log(soma);