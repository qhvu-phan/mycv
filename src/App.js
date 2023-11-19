import logo from './logo.svg';
import './App.css';

function App() {
  var dateVariable = Date().toLocaleString();
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Justin Channel
        </p>
        <a className='App-link' href="youtube.com">Follow me on Youtube Channel!</a>
        <p>Study CI/CD with Justin Phan - Huy Vu</p>
        <p>Current time: {dateVariable}</p>
      </header>
    </div>
  );
}

export default App;
