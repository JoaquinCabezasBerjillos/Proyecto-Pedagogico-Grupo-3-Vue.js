export default {
  getProductos() {
    return apiCliente.get("/api/productos");
  },
  getProducto(id) {
    return apiCliente.get("/api/productos/" + id);
  },
  deleteProducto(id) {
    return apiCliente.delete("/api/productos/" + id);
  },
  createProducto(producto) {
    return apiCliente.post("/api/productos/", producto);
  },
  updateProducto(id, producto) {
    return apiCliente.put("/api/productos/" + id, producto);
  },
  selectFile(id, foto) {
    return apiCliente.put("/api/foto/" + id, foto);
  },
};
