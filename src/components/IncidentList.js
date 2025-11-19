import React  from "react";
import './IncidentList.css'

function IncidentList(props) {
        return (
            <table className="table table-striped table-hover table-dark shadow-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Urgencia</th>
                        <th>Estado</th>
                        <th>Descripción</th>
                        <th>Ubicación</th>
                        <th>Usuario</th>   
                        <th>Fecha registro</th>
                    </tr>
                </thead> 
                <tbody>
                    {props.incidencias.map((i) => (
                            <tr key={i.id_incidencia} className="table-light">
                                {/*Cada propiedad es una celda <td>*/}
                                <td>{i.id_incidencia}</td>
                                <td>{i.titulo}</td>
                                <td>{i.nivel_urgencia}</td>
                                <td>{i.estado}</td>
                                <td>{i.descripcion}</td>
                                <td>{i.ubicacion}</td>
                                <td>{i.id_usuario}</td>
                                <td>{i.fecha_registro}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
}


export default IncidentList;