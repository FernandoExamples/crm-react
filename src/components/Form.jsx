import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import * as ClientService from '../services/clients.service'
import Error from './Error'

function Formulario() {
  const validationSchema = yup.object().shape({
    nombre: yup.string().required('El nombre del Cliente es obligatorio').min(3, 'El nombre es muy corto'),
    empresa: yup.string().required('El nombre de la empresa es obligatorio'),
    email: yup.string().required('El email es obligatorio').email('El email es inválido'),
    telefono: yup.number().positive('Número no válido').integer('Número no válido').typeError('El número no es válido'),
  })

  const handleSubmit = async (values, { resetForm }) => {
    const client = { ...values }
    client.id = Date.now()
    const newClient = await ClientService.addClient(client)
    console.log(newClient)
    resetForm()
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-center text-xl uppercase'>Agregar Cliente</h1>

      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => {
          return (
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
                {errors.nombre && touched.nombre && <Error message={errors.nombre} />}
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
                {errors.empresa && touched.empresa && <Error message={errors.empresa} />}
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
                {errors.email && touched.email && <Error message={errors.email} />}
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
                {errors.telefono && touched.telefono && <Error message={errors.telefono} />}
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
                  placeholder='Notas del cliente'
                  name='notas'
                ></Field>
              </div>

              <input
                type='submit'
                value='Agregar Cliente'
                className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
              />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default Formulario
