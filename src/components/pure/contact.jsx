import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact';

const Contact_component = ({ contact_list }) =>{
    return(
        
            <div>
                <h2>
                    NAME: {contact_list.name}
                </h2>
                <h2>
                    LAST NAME: {contact_list.last_name}
                </h2>
                <h2>
                    EMAIL: {contact_list.email}
                </h2>
                <h2>
                    STATUS CONNECT: {contact_list.connect_status}
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