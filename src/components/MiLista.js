import React  from "react";

function MiLista(props) {
        return (
            <>
                <ul>
                    {
                        props.incidencias.map((i) => (
                            <React.Fragment key={i.id_incidencia}>
                                <dt><strong>Titulo: </strong>{i.titulo}</dt>
                                <dd><strong>Descripcion: </strong>{i.descripcion}</dd>
                                <dd><strong>Usuario: </strong>{i.id_usuario}</dd>
                                <dd><strong>Urgencia: </strong>{i.nivel_urgencia}</dd>
                                <dd><strong>Ubicacion: </strong> {i.ubicacion}</dd>
                            </React.Fragment>
                        ))
                    }
                </ul> 
            </>
        );
}


export default MiLista;