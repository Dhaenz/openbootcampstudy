import React from 'react';
import { Contacto } from '../../models/contacto';
import ContactoBComponent from '../pure/contactob';

const ContactoAComponent = () => {

    const defaultContacto = new Contacto('Daniel', 'Ross', '@gmail', false)
    return (
        <div>
            <h1>
                Tu contacto:
            </h1>
            {/* TODO: Aplicar un form/map para renderizar una lista */}
            <ContactoBComponent contacto={ defaultContacto }></ContactoBComponent>
        </div>
    );
};

export default ContactoAComponent;