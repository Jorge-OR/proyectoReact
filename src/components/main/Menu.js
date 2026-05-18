import { Link } from "react-router-dom";

function Menu(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/ver">Ver incidencias</Link></li>
                    <li><Link to="/registrar">Registrar incidencias</Link></li>
                    {props.usuarioLogin && (props.usuarioLogin.rol.nombre_rol === "admin") ? 
                        <li><Link to="/gestion-usuarios">Gestión de Usuarios</Link></li>: null}
                    
                </ul>
            </nav>
        </div>
    );
}

export default Menu;