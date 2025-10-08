
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hola mundo</h1>
      <h2>Este es mi primer componente React</h2>
      <div className='Parrafo'>
      <p>Bienvenido a mi aplicación, esto fue creado con Javascript en React</p>
      </div>
      
      <MiLista 
      titulo="Clientes" 
      nombre1="Juan" 
      nombre2="Luis" 
      nombre3="Laura" 
      nombre4="María"/>
      <MiLista 
      titulo="Amigos" 
      nombre1="Rubén" 
      nombre2="Lara" 
      nombre3="Lorena" 
      nombre4="Javier"/>
      <MiLista 
      titulo="Familiares" 
      nombre1="Ramón" 
      nombre2="Diana" 
      nombre3="Marcos" 
      nombre4="Alicia"/>
      <Footer/>

    </div>
  );
}

export default App;
