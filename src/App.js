import logo from "./logo-ah.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="cheese" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://www.rafaelaellensburg.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rafaela Ellensburg
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/RafaelaEllensburg/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
