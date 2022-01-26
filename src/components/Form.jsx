import React from 'react'
import { Formik, Form, Field } from 'formik'

function Formulario() {
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-center text-xl uppercase'>
        Agregar Cliente
      </h1>

      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: '',
        }}
      >
        {() => (
          <Form className='mt-10'>
            <div className='mb-4'>
              <label htmlFor='nombre' className='text-gray-800'>
                Nombre
              </label>
              <Field
                type='password'
                className='mt-2 block w-full p-3 bg-gray-50'
                id='nombre'
                placeholder='Nombre del Cliente'
                name='nombre'
              ></Field>
            </div>

            <div className='mb-4'>
              <label htmlFor='empresa' className='text-gray-800'>
                Empresa
              </label>
              <Field
                type='text'
                className='mt-2 block w-full p-3 bg-gray-50'
                id='empresa'
                placeholder='Empresa del Cliente'
                name='empresa'
              ></Field>
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='text-gray-800'>
                Email
              </label>
              <Field
                type='email'
                className='mt-2 block w-full p-3 bg-gray-50'
                id='email'
                placeholder='Email del Cliente'
                name='email'
              ></Field>
            </div>

            <div className='mb-4'>
              <label htmlFor='tel' className='text-gray-800'>
                Telefono
              </label>
              <Field
                type='tel'
                className='mt-2 block w-full p-3 bg-gray-50'
                id='tel'
                placeholder='Teléfono del Cliente'
                name='telefono'
              ></Field>
            </div>

            <div className='mb-4'>
              <label htmlFor='notas' className='text-gray-800'>
                Notas
              </label>
              <Field
                as='textarea'
                type='text'
                className='mt-2 block w-full p-3 bg-gray-50 h-40'
                id='notas'
                placeholder='Notasl del cliente'
                name='notas'
              ></Field>
            </div>

            <input
              type='submit'
              value='Agregar Cliente'
              className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Formulario
