export default {
    getClientes() {
        return apiCliente.get('/api/clientes')
    },
    getCliente(id) {
        return apiCliente.get('/api/clientes/'+id)
    },
    deleteCliente(id) {
        return apiCliente.delete('/api/clientes/'+id)
    },
    createCliente(cliente) {
        return apiCliente.post('/api/clientes/', cliente)
    },
    updateCliente(id, cliente) {
        return apiCliente.put('/api/clientes/'+id, cliente)
    },
}