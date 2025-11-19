import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import IncidentList from '../IncidentList';
import Form from '../Form'
import Foto from '../../img/Incidencias.png';


function App () {
 const [incidencias, setIncidencia] = useState( [
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
            id_incidencia: 2,
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
            id_incidencia: 3,
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
            id_incidencia: 4,
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
            id_incidencia: 5,
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
            id_incidencia: 6,
            id_usuario: "José",
            titulo: "Ratón y teclado dañados",
            descripcion: "Ratón y teclado dañados",
            categoria: "Hardware",
            nivel_urgencia: "Alta",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B204"
        },

        {
            id_incidencia: 7,
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
            id_incidencia: 8,
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
            id_incidencia: 9,
            id_usuario: "Carolina",
            titulo: "Cable HDMI roto",
            descripcion: "Cable HDMI roto",
            categoria: "Hardware",
            nivel_urgencia: "Baja",
            fecha_registro: "2025-10-20",
            estado: "Abierta",
            ubicacion: "B104"
        }
  ])


   const agregarIncidencia = (usuario_nuevo,titulo_nuevo,descripcion_nuevo,categoria_nuevo,urgencia_nuevo,
                            ubicacion_nuevo)=> {
                const fecha = new Date();
                const year = fecha.getFullYear();
                const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
                const day = String(fecha.getDate()).padStart(2, '0');
                const fechaFormateada = `${year}-${month}-${day}`;
        const nueva_incidencia={
            id_incidencia: incidencias.length+1,
            id_usuario: usuario_nuevo,
            titulo: titulo_nuevo,
            descripcion: descripcion_nuevo,
            categoria: categoria_nuevo,
            nivel_urgencia: urgencia_nuevo,
            fecha_registro: fechaFormateada,
            estado: "Abierta",
            ubicacion: ubicacion_nuevo
        }
        console.log("Nueva incidencia",nueva_incidencia);
        setIncidencia([...incidencias, nueva_incidencia])
    }

  return (
    <div className='card' style={{backgroundImage: `url(${Foto})`, backgroundSize: "cover", 
                    backgroundRepeat: "no repeat"}}>
    <Header/>
    <h2 className='mb-4 text-center'>Mi aplicacion</h2>
    <div className="container-fluid mt-4 row">
        <main className='col-md-8'>
            <p>Esta aplicacion muestra el contenido almacenado de mi app</p>
            <IncidentList incidencias={incidencias}/>
        </main>
        <aside className='col-md-4'>
            <Form agregarIncidencia={agregarIncidencia}/>
        </aside>
    </div>
    <Footer/>
    </div>
  );
  }



export default App;
