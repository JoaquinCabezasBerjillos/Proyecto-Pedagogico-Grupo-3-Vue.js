export default {
  getProductos() {
    return apiCliente.get("/api/productos");
  },
  getProducto(id) {
    return apiCliente.get("/api/productos/mostrar/" + id);
  },
  deleteProducto(id) {
    return apiCliente.delete("/api/productos/borrar/" + id);
  },
  createProducto(producto) {
    return apiCliente.post("/api/productos/", producto);
  },
  updateProducto(id, producto) {
    return apiCliente.patch("/api/productos/actualizar/" + id, producto);
  },
  selectFile(id, foto) {
    return apiCliente.put("/api/foto/" + id, foto);
  },
};
