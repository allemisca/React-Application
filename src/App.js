import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <br />
      </header>

      <div className="source-code">
        <a href="https://github.com/allemisca/React-Application">
          Open-source code,
        </a>{" "}
        by Alexandra Misca
      </div>
    </div>
  );
}

export default App;
