import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <Search />
      <br />
      <footer>
        <a href="https://github.com/aliciaelena/react_weather">
          Open-source code
        </a>{" "}
        by Alicia Nagele
      </footer>
    </div>
  );
}

export default App;
