import './App.css';
import Cards from './components/Cards';
import NavBar from './components/NavBar';
import characters from './data';
import Button from 'react-bootstrap/Button';

function App() {
  let onSearch = (id) => {
    alert(id);
  };
  return (
    <div>
      <NavBar onSearch={onSearch} />
      <div className='d-flex justify-content-center '>
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App;
