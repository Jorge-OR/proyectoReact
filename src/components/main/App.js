import React from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import MiLista from '../MiLista';
import Form from '../Form'


class App extends React.Component {
  state = {incidencias: [
     {
            id_incidencia: 1,
            id_usuario: "Pedro",
            titulo: "Proyector averiado en el aula 2",
            descripcion: "Proyector averiado en el aula 2",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B205"
        },

        {
            id_incidencia: 1,
            id_usuario: "Lara",
            titulo: "Impresora sin conexión",
            descripcion: "Impresora sin conexión",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B104"
        },

        {
            id_incidencia: 1,
            id_usuario: "Sara",
            titulo: "Ordenador de secretaría no enciende",
            descripcion: "Ordenador de secretaría no enciende",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "Secretaria"
        },

        {
            id_incidencia: 1,
            id_usuario: "Naty",
            titulo: "Wifi no disponible",
            descripcion: "Wifi no disponible",
            categoria: "Conectividad",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B204"
        },
        
        {
            id_incidencia: 1,
            id_usuario: "Merche",
            titulo: "Pantalla táctil no responde",
            descripcion: "Pantalla táctil no responde",
            categoria: "Hardware",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B204"
        },

        {
            id_incidencia: 1,
            id_usuario: "José",
            titulo: "Ratón y teclado dañados",
            descripcion: "Ratón y teclado dañados",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Baja",
            ubicacion: "B204"
        },

        {
            id_incidencia: 1,
            id_usuario: "María",
            titulo: "Altavoces sin sonido",
            descripcion: "Altavoces sin sonido",
            categoria: "Hardware",
            nivel_urgencia: "Media",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B204"
        },

        {
            id_incidencia: 1,
            id_usuario: "Blanca",
            titulo: "Servidor se reinicia",
            descripcion: "Servidor se reinicia",
            categoria: "Conectividad",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B104"
        },

         {
            id_incidencia: 1,
            id_usuario: "Carolina",
            titulo: "Cable HDMI roto",
            descripcion: "Cable HDMI roto",
            categoria: "Hardware",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B104"
        }
  ]
}

    agregarIncidencia = (id_nuevo,usuario_nuevo,titulo_nuevo,descripcion_nuevo,categoria_nuevo,urgencia_nuevo,
                            fecha_nuevo,estado_nuevo,ubicacion_nuevo)=> {
        const nueva_incidencia={
            id_incidencia: id_nuevo,
            id_usuario: usuario_nuevo,
            titulo: titulo_nuevo,
            descripcion: descripcion_nuevo,
            categoria: categoria_nuevo,
            nivel_urgencia: urgencia_nuevo,
            fecha_registro: fecha_nuevo,
            estado: estado_nuevo,
            ubicacion: ubicacion_nuevo
        }
        console.log("Nueva incidencia",nueva_incidencia);
        this.setState({incidencias:[...this.state.incidencias, nueva_incidencia]})
    }
render(){
  return (
    <>
    <Header/>
    <h2>Mi aplicacion</h2>
    <div className="contenedor-incidencias">
        <main>
            <p>Esta aplicacion muestra el contenido almacenado de mi app</p>
            <MiLista incidencias={this.state.incidencias}/>
        </main>
        <aside>
            <Form agregarIncidencia={this.agregarIncidencia}/>
        </aside>
    </div>
    <Footer/>
    </>
  );
  }
}

export default App;
