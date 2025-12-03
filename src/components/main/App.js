import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import IncidentList from '../IncidentList';
import Form from '../Form'
import Foto from '../../img/Incidencias.png';


function App () {
const [usuarios,setUsuarios] = useState([])
const [incidencias, setIncidencia] = useState( [])
//Definir la Url de la API para las incidencias(si JSON se ejecuta en el puerto 3004)
const INCIDENCIA_API_URL =  'http://localhost:3004/incidencias';
//Definir la Url de la API para los usuarios(si JSON se ejecuta en el puerto 3004)
const USUARIO_API_URL =  'http://localhost:3004/users';
//Hook para cargar las incidencias desde JSON Server
 useEffect(() =>{
    const obtenerIncidencias = async () => {
        try {
            let response = await fetch (INCIDENCIA_API_URL);
            if(!response.ok){
                throw new Error("HTTP Error");
            }
            const data = await response.json();
            console.log(data);
            setIncidencia(data);
        } catch(e){
            console.error("Error al cargar las incidencias", e);
        }
    }
    const obtenerUsuario = async () => {
        try {
            let response = await fetch (USUARIO_API_URL);
            if(!response.ok){
                throw new Error("HTTP Error");
            }
            const data = await response.json();
            console.log(data);
            setUsuarios(data);
        } catch(e){
            console.error("Error al cargar las incidencias", e);
        }
    }

    obtenerIncidencias();
    obtenerUsuario();
 },[]); //Se ejecuta una sola vez al montar el componente


   const agregarIncidencia = async(usuario_nuevo,titulo_nuevo,descripcion_nuevo,categoria_nuevo,urgencia_nuevo,
                            ubicacion_nuevo)=> {
        try {
                const fecha = new Date();
                const year = fecha.getFullYear();
                const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
                const day = String(fecha.getDate()).padStart(2, '0');
                const fechaFormateada = `${year}-${month}-${day}`;
    let usuarioEncontrado = usuarios.find((u)=> u.email === usuario_nuevo);
    if(usuarioEncontrado){
        const nueva_incidencia={
            usuario: usuarioEncontrado,
            titulo: titulo_nuevo,
            descripcion: descripcion_nuevo,
            categoria: categoria_nuevo,
            nivel_urgencia: urgencia_nuevo,
            fecha_registro: fechaFormateada,
            estado: "Abierta",
            ubicacion: ubicacion_nuevo,
            comentarios: []
        }
        let response = await fetch(INCIDENCIA_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(nueva_incidencia)
        });
        if(!response.ok){
            throw new Error(`Fallo de la petición POST. Estado HTTP: ${response.status}`);
        }
        let data = await response.json();
        console.log("Nueva incidencia",data);
        setIncidencia([...incidencias, data]);
        } else {
            alert("No se puede crear incidencia. Usuario no encontrado");
            throw new Error('Error al crear incidencia. Usuario no encontrado');
        }
    } catch(e) {
        console.error("Falló l apetición POST de la incidencia", e.message);
    }

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
