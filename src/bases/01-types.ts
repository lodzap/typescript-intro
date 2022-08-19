export let name: string = 'Pepito';
export let age: number = 32;
export let isValid: boolean = true;

name = 'Mary';
age = 28;
isValid = false;

export const templateString = `Esto es un string
multilineas
que puede tener
"" doble comillas
'' comillas simples
valor del name: ${name}
una expresión matematica ${2 * 2 * 2 + (5 / 2)}
números: ${age}
booleanos: ${isValid}
`;

console.log(templateString);

console.log(`Hola mi nombre es ${name} y tengo ${age} años.`)