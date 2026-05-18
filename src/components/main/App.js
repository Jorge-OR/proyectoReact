import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import IncidentList from '../IncidentList';
import Form from '../Form'
import Foto from '../../img/Incidencias.png';
import Login from '../Login';
import {jwtDecode} from "jwt-decode";
import Menu from './Menu';
import { Routes, Route } from 'react-router-dom';
import UserRoleManagement from '../UserRoleManagement';

function App () {
const [usuarios,setUsuarios] = useState([])
const [incidencias, setIncidencia] = useState( [])
const [usuarioLogin, setUsuarioLogin] = useState(null); 
const API_LOGIN_URL = 'http://localhost:3004/login';
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

useEffect(() => {
    const obtenerUsuarioLogin = () => {
        const savedToken = JSON.parse(localStorage.getItem("authToken"));
        if (savedToken) {
               
        const user = usuarios.find((u) => u.email === savedToken.email);
        //Si existe el usuario en texto, lo convertimos a objeto JSON  
        user ? setUsuarioLogin(user) : setUsuarioLogin(null);
            
        }
    }
    obtenerUsuarioLogin();
    }, [usuarios])





const inicioSesion = async (email, password) => {
        try {
            const response = await fetch(API_LOGIN_URL, {   
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "email": email, "password":  password })
            });
            if (response.ok) {
                const data = await response.json();
                setUsuarioLogin(data["user"]);
                localStorage.setItem("authToken", JSON.stringify(data["user"]));
                return true; // Inicio de sesión exitoso
            } else {
                const errorData = await response.json();
                alert(`fallo de autenticación. Error: ${response.status} ${errorData}`);
                return false; // Inicio de sesión fallido
            }
        } catch (error) {
            console.error('Error de la red al iniciar sesión:', error);
            return false; // Error en la solicitud
        }
    };
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
    <div className='m-2 card' style={{backgroundImage: `url(${Foto})`, backgroundSize: "cover", 
                    backgroundRepeat: "no repeat"}}>
    <Header/>
        {usuarioLogin ? (
                        <div>
                            <Menu usuarioLogin={usuarioLogin}/> 
                            <Routes>
                                <Route path="/" element={<p>Selecciona opción de menú</p>} />
                                <Route path="/ver" element={<IncidentList incidencias={incidencias}/>} />
                                <Route path="/registrar" element={<Form agregarIncidencia={agregarIncidencia}/>} />
                                <Route path="/gestion-usuarios" element={<UserRoleManagement usuarios={usuarios}/>} />
                            </Routes>
                            <h2 className='mb-4 text-center'>Mi aplicacion</h2>
                            <button className='position-absolute start-50 translate-middle' 
                            onClick={() => {setUsuarioLogin(null); localStorage.removeItem("authToken")}

                            }>Cerrar Sesión</button>
                            
                            <Footer/>
                        </div>
                    ) :
            <Login inicioSesion={inicioSesion}> </Login>
        }
    </div>
  );
  
  }



export default App;
