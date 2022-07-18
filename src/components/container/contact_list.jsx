import React, {useState} from 'react';
import { Contact } from '../../models/contact';
import Contact_component from '../pure/contact';

const Contact_list = () => {

    const [conection, setconection] = useState(false)

    const change_status_connect = () => { 
        setconection( !conection)
    }
    
    const logic_contact = new Contact('Ayrton', 'Rada', 'axel582001@hotmail.com', conection ? 'Contacto En Línea':'Contacto No Disponible')
    
    return (        
            <div>
                <h1>Contacto: </h1>
                <Contact_component contact_list = { logic_contact } />
                <button onClick={change_status_connect}>Cambiar Estado</button>     
            </div>
    );
}

export default Contact_list;