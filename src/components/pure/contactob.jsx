import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../../models/contacto'

const ContactoBComponent = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.name }
            </h2>
            <h2>
                Apellido: { contacto.secname }
            </h2>
            <h2>
                Correo: { contacto.email }
            </h2>
            <h2>
                Status: { contacto.status ? 'on line' : 'off line' }
            </h2>  
        </div>
    );
};

ContactoBComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};

export default ContactoBComponent;