
interface Persona {
    name: string;
    last_name: string;
    age: number;
    large?: number;  
}

export const latino: Persona = {
    name: 'Pepito',
    last_name: 'Perez',
    age: 25,
    large: 1.8
};

export const oriental: Persona = {
    name: 'Jum',
    last_name: 'Cham',
    age: 30
}

interface Animal {
    name: string;
    sonido: string;
    peso: number;
    vuela?: boolean;
}

const Perro: Animal = {
    name: 'Firulais',
    sonido: 'Guaw Guaw',
    peso: 24,
    vuela: false
}

const Gato: Animal = {
    name: 'Michi',
    sonido: 'Miaw Miaw',
    peso: 6,
    vuela: false
}

console.log(Perro);
console.log(Gato);
console.log(latino);
console.log(oriental);

const LeerAlgo = (valora: string, valorb: string) => valora + ' ' + valorb;

const join = (a:string, b:string) => a + ' ' + b;

function LeerAlgo2 (valora: string, valorb: string, callback: any) {
  return callback(valora, valorb);
};

// const miNombre = LeerAlgo('Lodwin', 'Zapata');
// console.log(miNombre);

const miNombre2 = LeerAlgo2('Lodwin', 'Zapata', join);
console.log(miNombre2);
