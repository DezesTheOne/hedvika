import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>React webová aplikace</h1>
      </header>
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          {" "}
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
      </main>
      <footer>
        <p>Hedvika Reichlová, 2024</p>
      </footer>
    </div>
  );
};
