import { useEffect, useState } from 'react'
import Cliente from '../components/Cliente'
import * as ClientsService from '../services/clients.service'

function Home() {
  const [clients, setClients] = useState([])

  const fetchClients = async () => {
    const clients = await ClientsService.fetchClients()
    setClients(clients)
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const deleteClient = async (id) => {
    await ClientsService.deleteClient(id)
    fetchClients()
  }

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Cliente</h1>
      <p className='mt-3'>Administra tus clientes</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Contacto</th>
            <th className='p-2'>Empresa</th>
            <th className='p-2'>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((cliente) => (
            <Cliente key={cliente.id} cliente={cliente} deleteClient={deleteClient} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home
