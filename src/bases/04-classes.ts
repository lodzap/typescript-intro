export interface Humano {
   nombre: string;
   genero: string;
   come?: boolean;

   saludar(): string;

   despedir(): string;

   caminar(direccion: string): string;
}

//abstract class NewPerson() { }

export class Persona implements Humano {
   private _nombre: string;
   private _genero: string;
   private _large: number = 0;

   constructor(nombre: string, genero: string) {
      this._nombre = nombre;
      this._genero = genero;
   }

   saludar() {
     const texto = `Hola como estas, soy ${this._nombre} del genero: ${this._genero}`;
     console.log(texto);
     return texto;
   }

   despedir() {
      const texto = `Chao chao!!`;
      console.log(texto);
      return texto;
   }

   caminar(direccion: string) {
      const texto = 'Camina ' + direccion;
      console.log(texto);
      return texto;
   }

   get nombre(): string {
      return this._nombre;
   }

   get genero(): string {
      return this._genero;
   }

   get large(): number {
      return this._large;
   }

   set large(estatura: number) {
      if (estatura <= 2000) {
         this._large = estatura;
      }
   }
}

export const carla = new Persona('Carla', 'F');
carla.large = 120;

console.log(carla.nombre);
console.log(carla.genero);
console.log(carla.large);

carla.saludar();
carla.caminar('de frente');
carla.despedir();
carla.caminar('a la izquierda');

// 1. Crear una clase
// 2. 3 metodos
// 3. 2 propiedades
// 4. Crear una interface
// 5. Aplicar la interface a su clase 'implemets'
// 6. Prueba creacion de objeto, con la clase, crear un objeto con la interface.