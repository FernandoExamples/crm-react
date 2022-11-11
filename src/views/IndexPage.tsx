import { Cliente } from '@/entities/Cliente'
import axios from '@/network/axios'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { ClientRow } from '../components/ClientRow'

export const IndexLoader: LoaderFunction = async () => {
  const resp = await axios.get('/clients')
  const clientes = resp.data
  
  return clientes
}

export const IndexPage = () => {
  const clientes = useLoaderData() as Cliente[]

  return (
    <>
      <h1 className="font-bacl text-blue-400 text-4xl">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      <table className="w-full bg-white shadow mt-5 table-auto">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">Cliente</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((c) => (
            <ClientRow cliente={c} key={c.id}></ClientRow>
          ))}
        </tbody>
      </table>
    </>
  )
}
