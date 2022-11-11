import { Cliente } from '@/entities/Cliente'
import { ActionFunction, Form, redirect, useNavigate } from 'react-router-dom'
import axios from '@/network/axios'

export const action: ActionFunction = async ({ params }) => {
  const resp = confirm('¿Estas seguro?')

  if (resp) {
    await axios.delete(`/clients/${params.id}`)
  }

  return redirect('/')
}

interface Props {
  cliente: Cliente
}

export const ClientRow = ({ cliente }: Props) => {
  const navigate = useNavigate()

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{cliente.nombre}</p>
        <p className="">{cliente.empresa}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {cliente.email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Teléfono: </span>
          {cliente.telefono}
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clientes/${cliente.id}`)}
        >
          Editar
        </button>
        <Form method="post" action={`/clientes/${cliente.id}/eliminar`}>
          <button type="submit" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  )
}
