import './App.css';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import "bulma/css/bulma.css"
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Ayanti Joyas"/>
    </div>
  );
}

export default App;
