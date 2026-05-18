import React from "react";  

function UserRoleManagement(props) {
    return (
        <div>
            <h2>Gestión de Roles de Usuario</h2>
            <p>Aquí puedes gestionar los roles de los usuarios.</p>
            {
            <table>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {props.usuarios.map((u) => (
                        <tr key={u.id}>
                            <td>{u.nombre}</td>
                            <td>{u.correo}</td>
                            <td>{u.rol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
        </div>
    );
}

export default UserRoleManagement;