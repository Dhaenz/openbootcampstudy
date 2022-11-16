import logo from './logo.svg';
import './App.css';
import ContactoAComponent from './components/containers/contactoa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoAComponent></ContactoAComponent>
      </header>
    </div>
  );
}

export default App;
