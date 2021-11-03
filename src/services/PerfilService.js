export default {
    getUsers() {
      return apiCliente.get("/api/users");
    },
    getUser(id) {
      return apiCliente.get("/api/users/" + id);
    },
    uploadFile(formData) {
      return apiCliente.post("/api/users/foto/", formData);
    },
  };