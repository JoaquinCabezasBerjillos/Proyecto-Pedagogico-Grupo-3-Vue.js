export default {   
    
 getProductos() {
    return apiCliente.get('/api/productos')
},
getProductos(id) {
    return apiCliente.get('/api/productos/'+id)
},
deleteProductos(id) {
    return apiCliente.delete('/api/productos/'+id)
},
createProducto(producto) {
    return apiCliente.post('/api/productos/', producto)
},
updateProductos(id, producto) {
    return apiCliente.put('/api/productos/'+id, producto)
},
uploadImage(name, file) {
    return apiCliente.put('/api/productos/'+name, file)

},


}
