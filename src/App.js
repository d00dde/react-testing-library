import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
          Edit <code>src/App.js</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React & Testing library
        </a>
        <label htmlFor="input">Label</label>
        <input type="text" id='input' placeholder='...input'/>
      </header>
    </div>
  );
}

export default App;
