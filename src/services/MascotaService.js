

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