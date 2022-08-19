import './style.css';
// import { name, age, isValid } from './bases/01-types';
// import { latino } from './bases/03-objects';
import { Pokemon } from './bases/05-async-await';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Bienvenido ${Pokemon.name}!!!</h1>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
`;
