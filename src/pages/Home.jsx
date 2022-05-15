import { useEffect } from 'react'
import * as ClinetsService from '../services/clients.service'

function Home() {
  useEffect(() => {
    const fetchClients = async () => {
      const clients = await ClinetsService.fetchClients()
      console.log(clients)
    }
    fetchClients()
  }, [])

  return <div>Home</div>
}

export default Home
