import { Cliente } from '@/entities/Cliente'
import { LoaderFunction, useLoaderData } from 'react-router-dom'
import { ClientRow } from './ClientRow'

export const IndexLoader: LoaderFunction = () => {
  const clientes = [
    {
      id: 1,
      nombre: 'Juan',
      telefono: 102013313,
      email: 'juan@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 2,
      nombre: 'Karen',
      telefono: 138198313,
      email: 'karen@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 3,
      nombre: 'Josue',
      telefono: 31983913,
      email: 'josue@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 4,
      nombre: 'Miguel',
      telefono: 319381983,
      email: 'miguel@juan.com',
      empresa: 'Codigo Con Juan',
    },
    {
      id: 5,
      nombre: 'Pedro',
      telefono: 1398198938,
      email: 'pedro@juan.com',
      empresa: 'Codigo Con Juan',
    },
  ]

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
