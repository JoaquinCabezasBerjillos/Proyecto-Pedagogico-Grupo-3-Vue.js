function uploadFile(formData) {
  return apiCliente.post("/api/productos/foto/", formData).then((x) => x.data);
}
export { uploadFile };
