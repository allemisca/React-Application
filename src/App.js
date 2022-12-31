import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was coded by Alexandra Misca and it is{" "}
          <a
            href="https://github.com/allemisca/React-Application"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced.
          </a>
        </footer>
      </div>
    </div>
  );
}
