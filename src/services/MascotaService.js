

export default {
    getMascotas() {
        return apiCliente.get('/api/mascotas')
    },
    getMascota(id) {
        return apiCliente.get('/api/mascotas/mostrar/'+id)
    },
    deleteMascota(id) {
        return apiCliente.delete('/api/mascotas/borrar/'+id)
    },
    createMascota(mascota) {
        return apiCliente.post('/api/mascotas/crear/', mascota)
    },
    updateMascota(id, mascota) {
        return apiCliente.put('/api/mascotas/actualizar/'+id, mascota)
    },
}