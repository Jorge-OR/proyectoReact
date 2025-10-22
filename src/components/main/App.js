
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista'

function App() {
  return (
    <>
      <Header/>
      <h2>Mi aplicacion</h2>
      <div id='Parrafo'>
      <p>Esta aplicacion muestra el contenido almacenado de mi app</p>
      </div>
      <MiLista/>
      <Footer/>
      </>
  );
}

export default App;
