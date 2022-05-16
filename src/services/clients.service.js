import axios from '../plugins/axios'

export async function addClient(client) {
  try {
    const resp = await axios.post('/clientes', client)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchClients() {
  try {
    const resp = await axios.get('/clientes')
    return resp.data
  } catch (error) {
    console.log(error)
  }
}

export async function fetchClient(id) {
  try {
    const resp = await axios.get(`/clientes/${id}`)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}

export async function updateClient(id, client) {
  try {
    const resp = await axios.put(`/clientes/${id}`, client)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}

export async function deleteClient(id) {
  try {
    const resp = await axios.delete(`/clientes/${id}`)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}
