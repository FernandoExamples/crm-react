import axios from '@/network/axios'
import { ActionFunction, Form, LoaderFunction, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom';
import { Cliente } from '@/entities/Cliente'
import { Formulario } from '@/components/Formulario'
import { Error } from '@/components/Error'

export const loader: LoaderFunction = async ({ params }) => {
  const resp = await axios.get(`/clients/${params.id}`)

  return resp.data
}

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  )

  const errors = []
  if (Object.values(data).includes('')) errors.push('Todos los campos son obligatorios')
  if (!regex.test(data.email.toString())) errors.push('El email no es válido')

  if (errors.length > 0) return errors

  await axios.put(`/clients/${params.id}`, data)

  return redirect('/')
}

export const EditarCliente = () => {
  const cliente = useLoaderData() as Cliente
  const errors = useActionData() as string[]
  const navigate = useNavigate()

  return (
    <>
      <h1 className="font-bacl text-blue-400 text-4xl">Editar cliente {cliente.nombre}</h1>
      <p className="mt-3">Cambia los campos que necesites</p>

      <div className="flex justify-end">
        <button className="bg-blue-800 text-white px-3 py-1 font-bold uppercase" onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-12">
        {errors && errors.map((item, i) => <Error key={i}>{item}</Error>)}

        <Form method="post" noValidate>
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Guardar Cliente"
          />
        </Form>
      </div>
    </>
  )
}
