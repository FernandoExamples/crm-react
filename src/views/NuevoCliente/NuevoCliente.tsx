import { useNavigate, Form, ActionFunction } from 'react-router-dom'
import { Formulario } from './Formulario'

export const FormAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
}

export const NuevoCliente = () => {
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-bacl text-blue-400 text-4xl">Nuevo Cliente</h1>
      <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-12">
        <Form method="post">
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Registar Cliente"
          />
        </Form>
      </div>
    </>
  )
}