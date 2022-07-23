import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';

const Contact_component = ({ contact, complete, remove }) =>{


    function change_status_connect(){ 
        if(contact.connect_status){
            return( <button onClick={ () => complete(contact)}>'Contacto En Línea'</button>)
        } else {
            return( <button onClick={ () => complete(contact)}>'Contacto Fuera de Línea'</button>)
        }
    }

    return(
        
            <div>
                <h2>
                    NAME: {contact.name}
                </h2>
                <h2>
                    LAST NAME: {contact.last_name}
                </h2>
                <h2>
                    EMAIL: {contact.email}
                </h2>
                <h2>
                    STATUS CONNECT: {change_status_connect()}
                    <button onClick={ () => remove(contact)} className='btn btn-success btn-lg ms-2'>Remove</button>
                </h2>
            </div>

    )
}

Contact_component.propTypes = {
    contact_list: PropTypes.instanceOf(Contact),
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    connect_status: PropTypes.bool
};

export default Contact_component;