export default {
    getPedidos() {
      return apiCliente.get("/api/pedidos");
    },
    getPedido(id) {
      return apiCliente.get("/api/pedidos/" + id);
    },
    deletePedido(id) {
      return apiCliente.delete("/api/pedidos/" + id);
    },
    // Para decir que el pedido está listo y envía un email al usuario
    updatePedido(id, producto) {
      return apiCliente.put("/api/pedidos/" + id, producto);
    },
   
  };
  