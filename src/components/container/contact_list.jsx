import React, {useState} from 'react';
import { Contact } from '../../models/contact';
import Contact_component from '../pure/contact';
import Contact_form from '../pure/forms/contactForm';

const Contact_list = () => {
    
    const logic_contact = new Contact('Ayrton', 'Rada', 'axel582001@hotmail.com', true)
    const [conection, setconection] = useState([logic_contact])

   //**Cambiar el valor 
   function change_status_connect(contact){
       const index = conection.indexOf(contact)
       const temp_conection = [...conection]
       temp_conection[index].connect_status = !temp_conection[index].connect_status 
       setconection(temp_conection)
   }

   //**Creacion del contacto
   function add_contact(contact){
       const temp_conection = [...conection]
       temp_conection.push(contact)
       setconection(temp_conection)
   }

   //**Eliminacion de un contacto
   function remove_contact(contact){
       const index = conection.indexOf(contact)
       const temp_conection = [...conection]
       temp_conection.splice(index, 1)
       setconection(temp_conection)
   }
    
    return (        
            <div>
                <h1>Contacto: </h1>
                
                    {
                        conection.map( (map, i) => {
                            return(
                                <Contact_component  
                                key= {i}
                                contact = { map }
                                complete = {change_status_connect}
                                remove = {remove_contact} />
                            )
                        })
                    }
                    
                <Contact_form add={add_contact} />
            </div>
    );
}

export default Contact_list;