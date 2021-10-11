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
    
 getProductos() {
    return apiCliente.get('/api/productos')
},
getProductos(id) {
    return apiCliente.get('/api/productos/'+id)
},
deleteProductos(id) {
    return apiCliente.delete('/api/productos/'+id)
},
createProductos(producto) {
    return apiCliente.post('/api/productos/', producto)
},
updateProductos(id, producto) {
    return apiCliente.put('/api/productos/'+id, producto)
},
previewImage(id, foto) {
    return apiCliente.get('/api/productos/'+id, foto)

},

}
