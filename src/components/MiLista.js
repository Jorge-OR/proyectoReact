import React, {useState} from "react";

function MiLista() {
    const [incidencias, setIncidencias] = useState([
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
        }]);
   
        return (
            <>
                <ul>
                    {
                        incidencias.map((i) => (
                            <li key={i.id_incidencia}><strong>Titulo: </strong>{i.titulo} <br></br>
                            <strong>Descripcion: </strong>{i.descripcion}, <br></br>
                            <strong>Usuario: </strong>{i.id_usuario}, <br></br>
                            <strong>Ubicacion: </strong> {i.ubicacion}<br></br><br></br></li>
                        ))
                    }
                </ul> 
            </>
        );
}


export default MiLista;