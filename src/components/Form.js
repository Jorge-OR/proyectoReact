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
            <div className="card mx-auto">
                <h2 className="card-tittle mb-4 text-center"> Registrar incidencias </h2>
                <form onSubmit={this.envioFormulario}>
                    
                      {/*Usuario*/}
                    <div class="elemento-form">
                        <label className="mb-3 form-label"> Usuario </label>
                        <input className="mb-3 form-control" type="text" name="usuario" placeholder="Ej: María" required/>
                    </div>
                    {/*Título*/}
                    <div class="elemento-form">
                        <label className="mb-3 form-label"> Título </label>
                        <input className="mb-3 form-control" type="text" name="titulo" placeholder="Ej: No funciona ratón del ordenador" required/>
                    </div>
                    {/*Descripción*/}
                    <div class="elemento-form">
                        <label className="mb-3 form-label"> Descripción </label>
                        <textarea className="mb-3 form-control" name="descripcion" placeholder="Escribe la descripción de la incidencia" required/>
                    </div>
                    {/*Categoría*/}
                    <div class="elemento-form">
                        <label className="mb-3 form-label"> Categoría </label>
                        <select className="mb-3 form-control" name="categoria" required>
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
                        <label className="mb-3 form-label"> Nivel de urgencia </label>
                        <select className="mb-3 form-control" name="nivel" required>
                            <option value="">Seleccionar...</option>
                            <option>Alta</option>
                            <option>Media</option>
                            <option>Baja</option>
                            </select>
                    </div>
                    
                    {/*Ubicación*/}
                    <div class="elemento-form">
                        <label className="mb-3 form-label"> Ubicación </label>
                        <input className="mb-3 form-control" type="text" name="ubicacion" placeholder="Ej: B205" required/>
                    </div>
                    {/*Botón*/}
                    <button type="submit" className="btn btn-outline-danger btn-lg mx-auto d-grid"> Registrar </button>

                </form>
            </div>
        )
    }
}

export default Form;