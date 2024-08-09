let suma = 0;
let suma2 = 0;


console.time('todo');
console.time('bucle')
for (let i = 0; i < 1; i++) {
    suma += i;
}
console.timeEnd('bucle');


console.time('bucle2')
for (let j = 0; j < 1; j++) {
    suma2 += j;
}
console.timeEnd('bucle2');

console.timeEnd('todo');


console.time('async')
function asincrona() {
    return new Promise((resolve)=>{
        console.log('proceso terminado...');
    })
}

asincrona().then(console.timeEnd('async'));