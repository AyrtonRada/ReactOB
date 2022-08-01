import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { User } from '../../../models/user.class'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum'

const Register_formik = () => {
  
    let user = new User

    const initial_values = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const register_schema = Yup.object().shape({
        username: Yup.string()
            .min(6, 'Username too short')
            .max(12, 'Username too long')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password too short')
            .required('Password is required'),
        confirm: Yup.string()
            .when('password', {
                is: value =>(value && value.length > 0 ? true : false),
                then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match!') // ** accedemos al contenido del password y sino salta un aviso de error.
            })
            .required('You must confirm the password'),
        role: Yup.string()
            .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
            .required('Role is required')
    })
    
    return (
    <div>
      <h4>Register Formik</h4>
      <Formik
            initialValues={initial_values}
            validationSchema = {register_schema}
            onSubmit = {
                async(values) =>{
                    await new Promise((r)=> setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                }
            }
      >
        {({
            values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                    <label htmlFor='username'>Username</label>
                    <Field id='username' type= 'text' name='username' placeholder='Your username' />

                    {/* Errors Username */}
                    {
                        errors.username && touched.username && ( <ErrorMessage name='username' component='div'/>) 
                    }

                    <label htmlFor='email' >Email</label>
                    <Field id='email' type= 'email' name='email' placeholder='example@email.com' />

                    {/* Errors email */}
                    {
                        errors.email && touched.email && ( <ErrorMessage name='email' component='div'/>) 
                    }

                    <label htmlFor='password'>Password</label>
                    <Field id='password' name='password' placeholder='password' type='password' />

                    {/* Errors password */}
                    {
                        errors.password && touched.password && ( <ErrorMessage name='password' component='div'/>) 
                    }


                    <label htmlFor='confirm'>Confirm Password</label>
                    <Field id='confirm' name='confirm' placeholder='confirm password' type='password' />
                    
                    {/* Errors confirm password */}
                    {
                        errors.confirm && touched.confirm && ( <ErrorMessage name='confirm' component='div'/>) 
                    }
                
                <button type='submit'>Register Account</button>
                {isSubmitting ? (<p>Sending your credentials..</p>): null}

                </Form>
            )
        }
      </Formik>
    </div>
  )
}

export default Register_formik
