export default {
    getUsers() {
      return apiCliente.get("/api/users");
    },
    getUser(id) {
      return apiCliente.get("/api/users/mostrar/" + id);
    },
    uploadFile(formData) {
      return apiCliente.post("/api/users/foto/", formData);
    },
  };