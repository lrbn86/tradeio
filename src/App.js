import logo from './logo.svg';
import './App.css';

function App() {

  const randomData = { "id": 10, "title": "json-server 10", "author": "typicode" };

  const URL = 'http://localhost:3000/posts';

  function handleClick() {
    fetch(URL)
      .then(res => res.json())
      .then (data => console.log(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>POST</button>
      </header>
    </div>
  );

}

export default App;
