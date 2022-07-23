import React, { useRef } from 'react'
import { Contact } from '../../../models/contact'

function Contact_form({add}) {

    const name_ref = useRef('')
    const last_name_ref = useRef('')
    const email_ref = useRef('')
    
    function add_contact(e){
        e.preventDefault()
        const new_contact = new Contact(
            name_ref.current.value,
            last_name_ref.current.value,
            email_ref.current.value,
            true
        )
        add(new_contact)
    }
    
    return (
        <div>
            <form onSubmit={add_contact} className="d-flex justify-content-center align-items-center mb-4">
                <div className='form-outline flex-fill'>
                    <input ref={name_ref} type="text" className='form-control form-control-lg' require autoFocus placeholder='Contact Name'/>
                    <input ref={last_name_ref} type="text" className='form-control form-control-lg' require autoFocus placeholder='Contact Last Name'/>
                    <input ref={email_ref} type="email" className='form-control form-control-lg' require autoFocus placeholder='Contact Email'/>
                </div>
                <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
            </form>
        </div>
    )
}

export default Contact_form
