import React from 'react';
import logo from '../../img/logo.jpg'

class Header extends React.Component{
    render(){
        return(
            <div className='bg-dark text-center text-white p-3'>
                <img src={logo} alt='logo' className='img-fluid' style={{width:"150px",height:"auto"}}/>
                <h3>
                    Bienvenido a la página de incidencias
                </h3>
            </div>
        );
    }
}

export default Header;