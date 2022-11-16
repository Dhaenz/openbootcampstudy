import PropTypes from 'prop-types';

export class Contacto {
    name= '';
    secname= '';
    email= '';
    status= false;

    constructor(name, secname, email, status){
        this.name = name;
        this.secname = secname;
        this.email = email;
        this.status = status;
    }
}

Contacto.propTypes = {
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    email: PropTypes.string,
    conectado: PropTypes.bool
}