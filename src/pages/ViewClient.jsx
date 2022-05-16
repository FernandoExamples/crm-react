import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as ClienteService from '../services/clients.service'

const ViewClient = () => {
  const [cliente, setCliente] = useState(null)
  const [loading, setLoading] = useState(true)

  const params = useParams()

  useEffect(() => {
    const fetchClient = async () => {
      const cliente = await ClienteService.fetchClient(params.id)
      setCliente(cliente)
      setLoading(false)
    }

    fetchClient()
  }, [])

  if (loading) return null

  if (!cliente) return <p>Sin resultados</p>

  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Ver cliente: {cliente.nombre}</h1>
      <p className='my-3'>Información del cliente</p>

      <p className='text-4xl text-gray-600'>
        <span className='uppercase font-bold text-gray-800'>Cliente: </span>
        {cliente.nombre}
      </p>
      <p className='text-2xl mt-4 text-gray-600'>
        <span className='uppercase font-bold text-gray-800'>Email: </span>
        {cliente.email}
      </p>
      <p className='text-2xl mt-4 text-gray-600'>
        <span className='uppercase font-bold text-gray-800'>Teléfono: </span>
        {cliente.telefono}
      </p>
      <p className='text-2xl mt-4 text-gray-600'>
        <span className='uppercase font-bold text-gray-800'>Empresa: </span>
        {cliente.empresa}
      </p>
      {cliente.notas && (
        <p className='text-2xl mt-4 text-gray-600'>
          <span className='uppercase font-bold text-gray-800'>Notas: </span>
          {cliente.notas}
        </p>
      )}
    </div>
  )
}

export default ViewClient
