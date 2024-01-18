import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <nav>
          <div class="navbar">
            <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="logo">
                <h1>Hedvika</h1>
              </div>
              <div class="menu-items">
                <li>
                  <a href="#">Tvorba Webu</a>
                </li>
                <li>
                  <a href="#">Fotografie</a>
                </li>
                <li>
                  <a href="#">Kontakt</a>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>

      </main>
      <footer>
        <p>Hedvika Reichlová, 2024</p>
      </footer>
    </div>
  );
};
