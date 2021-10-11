import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
    }
})

export default {
    getMascotas() {
        return apiCliente.get('/api/mascotas')
    },
    getMascota(id) {
        return apiCliente.get('/api/mascotas/'+id)
    },
    deleteMascota(id) {
        return apiCliente.delete('/api/mascotas/'+id)
    },
    createMascota(mascota) {
        return apiCliente.post('/api/mascotas/', mascota)
    },
    updateMascota(id, mascota) {
        return apiCliente.put('/api/mascotas/'+id, mascota)
    },
}