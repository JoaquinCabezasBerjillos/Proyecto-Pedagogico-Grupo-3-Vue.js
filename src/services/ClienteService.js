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
    updateCliente(id, cliente) {
        return apiCliente.put('/api/clientes/'+id, cliente)
    },
}