import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>Login to access the full dashboard</body>
      <footer className='App-footer'>Copyright 2020 - holberton School</footer>
    </div>
  );
}

export default App;
