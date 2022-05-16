import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as ClienteService from '../services/clients.service'
import FormEdit from '../components/FormEdit'

function EditClient() {
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
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>Utiliza este formulario para editar datos del cliente</p>

      <FormEdit cliente={cliente} />
    </>
  )
}

export default EditClient
