import axios from '../plugins/axios'

export async function addClient(client) {
  try {
    const resp = await axios.post('/clientes', client)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}
