import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login_form = () => {
  
    const login_schema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
            password: Yup.string()
                    .required('Password is required')
        }
    )

    const initial_credentials = 
        {
            email: '',
            password: ''
        }
    
    
    return (
    <div>
        <h4>Login Formik</h4>
        <Formik initialValues={initial_credentials}
            // ** Yup validation schema
            validationSchema={login_schema}
            // ** onSubmit event
            onSubmit={async(values) => {
            await new Promise((r) => setTimeout(r, 500))
            alert(JSON.stringify(values, null, 2))
            // ** We save the data in the localstorage
            localStorage.setItem('credentials', values)
       }}
       >

       {({  values,
            touched,
            errors,
            isSubmitting,
            handleBlur}) => (
                <Form>
                <label htmlFor="email">Email</label>
                <Field id="email" type="email" name="email" placeholder="example@gmail.com" />
                {
                    errors.email && touched.email && (
                    <ErrorMessage name="email" />
                    )
                }
                <label htmlFor="password">Password</label>
                <Field
                id="password"
                name="password"
                placeholder="password"
                type="password"
                 />
                 {
                    errors.password && touched.password && (
                        <ErrorMessage name="password" />
                    )
                }
                <button type="submit">Login</button>
                {isSubmitting ? (<p>Login your credentials...</p>): null}
            </Form>
       )}
        </Formik>
    </div>
  )
}

export default Login_form
