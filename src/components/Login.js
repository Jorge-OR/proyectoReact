

    function Login(props) {
        const sendForLogin = (event) => {
            event.preventDefault();
            let form = event.target;
            props.inicioSesion(form.email.value, form.password.value);
        }

        return (
            <div>
                <form onSubmit={sendForLogin}>
                    <h2>Iniciar Sesión</h2>
                        <label htmlFor="email">Email:</label>
                        <input type="email" placeholder="Correo" name="email" required />
                        <input type="password" placeholder="Contraseña" name="password" required />
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        );
    }
    export default Login;