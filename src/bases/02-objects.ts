export const numbers: any = [1, 20, '30', 50, undefined, 108, null, NaN];
export let algo = NaN;

export const anamiles: string[] = ['Perro', 'Gato', 'Leones'];

export const persona = {
  name: 'Daniel',
  first_name: 'Pepe',
  last_name: 'Zambrano',
  age: 22,
  large: 1.8,
  address: {
    number: 1212,
    street: 'CL 12#12-09'
  },
  state: ['Activo', 'Pendiente', 'Cancelado']
};

// Destructuración}
const { name, last_name, age, address, state } = persona;

// console.log(persona.name, persona.last_name, persona.address.street);
console.log(name, last_name, age, address.street, state[0], state.length);

console.log(algo);