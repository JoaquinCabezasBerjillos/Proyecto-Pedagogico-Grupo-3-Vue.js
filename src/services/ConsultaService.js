export default {
    getConsulta() {
      return apiCliente.get("/api/consulta");
    },
    getConsulta(id) {
      return apiCliente.get("/api/consulta/mostrar/" + id);
    },
    
    updateConsulta(id, consulta) {
      return apiCliente.patch("/api/consulta/actualizar/" + id, consulta);
    },
    
  };
  