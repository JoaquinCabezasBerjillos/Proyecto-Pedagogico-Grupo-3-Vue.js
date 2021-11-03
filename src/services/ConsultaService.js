export default {
    getConsultas() {
      return apiCliente.get("/api/consultas");
    },
    getConsulta(id) {
      return apiCliente.get("/api/consultas/" + id);
    },
    
    updateConsulta(id, consulta) {
      return apiCliente.patch("/api/consultas/" + id, consulta);
    },

   
  };