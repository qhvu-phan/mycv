import logo from './logo.svg';
import './App.css';

function App() {
  var dateVariable = new Date();
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Justin Channel
        </p>
        <a className='App-link' href="youtube.com">Follow me on Youtube Channel!</a>
        <p>Study CI/CD with Justin Phan - Huy Vu</p>
        <p>Last working: {dateVariable.getDate()}</p>
      </header>
    </div>
  );
}

export default App;
