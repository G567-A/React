import { useState } from 'react';
import ProjectCard from './ProjectCard';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Мої проєкти</h1>

      <ProjectCard
        title="Сайт-візитка"
        tech="HTML/CSS"
      />

      <ProjectCard
        title="Магазин"
        tech="JavaScript"
      />

      <hr />

      <h2>Лічильник: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Збільшити
      </button>

    </div>
  );
}

export default App;

