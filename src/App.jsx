import product from "./Mocks/Product.json"
import React from 'react';
import './App.css';
import luisana from './assets/luisana.jpg';
import lali from './assets/lali.jpg';
import pampita from './assets/pampita.jpg';
import eugenia from './assets/eugenia.jpg';
import valeria from './assets/valeria.jpg';

function App() {
  return (
    <div>
      <header>
        <h1>Top 5 Mujeres Argentinas Más Hermosas</h1>
        <p>Una selección de las mujeres argentinas más bellas según nuestra opinión.</p>
      </header>

      <main>
        <section>
          <h2>1. Luisana Lopilato</h2>
          <figure>
            <img src={luisana} alt="Luisana Lopilato" />
            <figcaption>Luisana Lopilato, actriz y modelo reconocida.</figcaption>
          </figure>
          <p>Luisana es una de las actrices y modelos más queridas en Argentina y en el mundo.</p>
        </section>

        <section>
          <h2>2. Lali Espósito</h2>
          <figure>
            <img src={lali} alt="Lali Espósito" />
            <figcaption>Lali Espósito, cantante y actriz de renombre.</figcaption>
          </figure>
          <p>Lali es una artista multifacética, conocida por su talento en la música y la actuación.</p>
        </section>

        <section>
          <h2>3. Pampita Ardohain</h2>
          <figure>
            <img src={pampita} alt="Pampita Ardohain" />
            <figcaption>Pampita Ardohain, modelo y conductora de televisión.</figcaption>
          </figure>
          <p>Pampita es una figura icónica en el mundo de la moda y la televisión argentina.</p>
        </section>

        <section>
          <h2>4. Eugenia Suárez</h2>
          <figure>
            <img src={eugenia} alt="Eugenia Suárez" />
            <figcaption>Eugenia "La China" Suárez, actriz y modelo destacada.</figcaption>
          </figure>
          <p>La China Suárez ha conquistado al público con su belleza y talento en la actuación.</p>
        </section>

        <section>
          <h2>5. Valeria Mazza</h2>
          <figure>
            <img src={valeria} alt="Valeria Mazza" />
            <figcaption>Valeria Mazza, supermodelo internacional.</figcaption>
          </figure>
          <p>Valeria Mazza es una de las modelos argentinas más reconocidas a nivel mundial.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Top Mujeres Argentinas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;