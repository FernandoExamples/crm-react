import { Error } from '@/components/Error'
import { useNavigate, Form, ActionFunction, useActionData } from 'react-router-dom'
import { Formulario } from './Formulario'

export const FormAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )

  const errors = []
  if (Object.values(data).includes('')) errors.push('Todos los campos son obligatorios')
  if (!regex.test(data.email.toString())) errors.push('El email no es válido')

  if (errors.length > 0) return errors
}

export const NuevoCliente = () => {
  const navigate = useNavigate()
  const errors = useActionData() as string[]

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
        {errors && errors.map((item, i) => <Error key={i}>{item}</Error>)}

        <Form method="post" noValidate>
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
