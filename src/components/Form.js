import React from "react"
import './Form.css'
class Form extends React.Component {

        envioFormulario= (event)=> {
            event.preventDefault();
            const form=event.target;
            this.props.agregarIncidencia( form.usuario.value, form.titulo.value,
                 form.descripcion.value, form.categoria.value, form.nivel.value, 
                 form.ubicacion.value)
        }

    render() {
        return (
            <div>
                <h2> Registrar incidencias </h2>
                <form onSubmit={this.envioFormulario}>
                    
                      {/*Usuario*/}
                    <div class="elemento-form">
                        <label> Usuario </label>
                        <input type="text" name="usuario" placeholder="Ej: María" required/>
                    </div>
                    {/*Título*/}
                    <div class="elemento-form">
                        <label> Título </label>
                        <input type="text" name="titulo" placeholder="Ej: No funciona ratón del ordenador" required/>
                    </div>
                    {/*Descripción*/}
                    <div class="elemento-form">
                        <label> Descripción </label>
                        <textarea name="descripcion" placeholder="Escribe la descripción de la incidencia" required/>
                    </div>
                    {/*Categoría*/}
                    <div class="elemento-form">
                        <label> Categoría </label>
                        <select name="categoria" required>
                            <option value="">Seleccionar...</option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Red y conectividad</option>
                            <option>Usuarios y accesos</option>
                            <option>Infraesructura</option>
                        </select>
                    </div>
                    {/*Urgencia*/}
                    <div class="elemento-form">
                        <label> Nivel de urgencia </label>
                        <select name="nivel" required>
                            <option value="">Seleccionar...</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                            </select>
                    </div>
                    
                    {/*Ubicación*/}
                    <div class="elemento-form">
                        <label> Ubicación </label>
                        <input type="text" name="ubicacion" placeholder="Ej: B205" required/>
                    </div>
                    {/*Botón*/}
                    <button type="submit" className="elemento-form-button"> Registrar </button>

                </form>
            </div>
        )
    }
}

export default Form;