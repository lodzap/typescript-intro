import axios from 'axios';
import { AxiosResponse } from '../interfaces/axios-response.interfaces';

export class Pokemon {
    constructor(
        public id: number, 
        public name: string,
    ) { }

    scream() {
        console.log(`${this.name.toUpperCase()}`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves() {
        const resul = await axios.get<AxiosResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);

        console.log(resul.data.moves);

        return resul.data.moves;
    }
}

const bulbasaur = new Pokemon(4, 'Bulbasaur');

bulbasaur.scream();
bulbasaur.speak();
bulbasaur.getMoves();