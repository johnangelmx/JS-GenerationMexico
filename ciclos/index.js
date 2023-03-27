/*
Ejercicio nº 1
Parte 1
Hay tres personas esperando en el banco. Sus nombres, en orden, son Sofía, David y Juan. Crea un array que tenga estos tres nombres en orden.
Parte 2
Se añaden dos personas más al final de la cola: Sara y Agustín. Se llama al cajero a la primera persona de la cola. ¿Qué aspecto tiene la cola?
Parte 3
Resulta que David estaba reservando un sitio para su amiga Renata. Ella se presenta y va detrás de él en la cola. Aparece otra persona (Elena)
y se pone al final de la cola. ¿Qué aspecto tiene la cola?
*/
// Parte 1
let fila = ["Sofia", "David", "Juan"];
// Parte 2
fila.push("Sara", "Agustin")
fila.shift()
// Parte 3
fila.splice(1, 0, "Renata")
fila.push("Elena")
//  ---
console.log(fila)

/*
*
* *
* * *
* * * *
* * * * *
*/
for (let i = 1; i <= 5; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += "* ";
    }
    console.log(linea);
}
/*
- Imprime repetidamente el valor de la variable xValor, disminuyéndolo en 0,5 cada vez,
mientras xValor siga siendo positivo.
*/
let xvalue = 10;
for (let i = xvalue; i >= 0; i -= 0.5) {
    console.log(i);
}
/*
Imprime todos los números impares entre 1 - 100.
 */
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += (i % 2 !== 0) ? i : 0;
}
console.log(`La suma de los numero impares es: ${sum}`);
/*
- Escribe un método con un bucle while para imprimir del 1 al n entre corchetes.
Por ejemplo, si n = 6 imprime [1] [2] [3] [4] [5] [6]
 */
let cifraImprimir = 6, contador = 1;
while (contador <= cifraImprimir) {
    console.log(`[${contador}]`)
    contador++;
}
/*
- Escribe un método con un bucle while que calcule la suma de los n primeros enteros positivos:
suma = 1 + 2 + 3 + ... + n
Ejemplos:
n = 5 suma = 15
n = 19 suma = 190
 */

let n = 19, cont = 1, suma = 0;
while (cont <= n) {
    suma += cont;
    cont++;
}
console.log(` La suma de los n numeros enteros positivos es: ${suma}`)