import "./App.css";
import { useState } from "react";
import logo from "./assets/images/logo-calculatrice.png";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <img className="logo" src={logo} alt="logo calculatrice" />
        <span>React Counter</span>
      </header>
      <main className="main">
        <div className="top">
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            {counter === 0 ? "" : "-"}
          </button>
          <p className="blue-bgc">{counter}</p>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter === 10 ? "" : "+"}
          </button>
        </div>
        <button
          className="blue-bgc"
          onClick={() => {
            setCounter(0);
          }}
        >
          Reset
        </button>
      </main>
      <footer className="footer">
        Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
        <span>Pops</span>
      </footer>
    </div>
  );
}

export default App;
