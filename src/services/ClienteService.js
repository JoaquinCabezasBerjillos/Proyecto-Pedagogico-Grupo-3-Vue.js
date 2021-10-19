export default {
    getClientes() {
        return apiCliente.get('/api/clientes')
    },
    getCliente(id) {
        return apiCliente.get('/api/clientes/mostrar/'+id)
    },
    deleteCliente(id) {
        return apiCliente.delete('/api/clientes/borrar/'+id)
    },
    updateCliente(id, cliente) {
        return apiCliente.put('/api/clientes/actualizar/'+id, cliente)
    },
}