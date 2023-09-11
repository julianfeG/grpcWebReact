import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiComponente from './components/Hello'; // Importa el componente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
              <MiComponente /> {/* Renderiza el componente aquí */}
          </div>
      </header>
    </div>

  );
}

export default App;
