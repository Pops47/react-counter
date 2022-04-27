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
          {counter === 0 ? (
            <div className="wide-left-button"></div>
          ) : (
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
          )}
          <p className="blue-bgc">{counter}</p>
          {counter === 10 ? (
            <div className="wide-right-button"></div>
          ) : (
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
          )}
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
