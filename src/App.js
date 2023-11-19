import logo from './logo.svg';
import './App.css';

function App() {
  var dateVariable = Date().toLocaleString();
   return (
    <div className="App">
      <header className="App-header">
        <img src='https://www.facebook.com/photo/?fbid=3730185863875125&set=a.1376335205926881' className="App-logo" alt="logo" />
        <p>
          Justin Blog
        </p>
        <a className='App-link' href="https://www.facebook.com/huyvu.phan.79/">Click to follow me on Facebook!</a>
        <p>Thanks for visiting</p>
        <p>Current time: {dateVariable}</p>
      </header>
    </div>
  );
}

export default App;
