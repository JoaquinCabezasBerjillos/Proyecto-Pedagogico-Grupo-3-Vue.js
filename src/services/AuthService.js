import axios from "axios";


const apiCliente = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  async login(data) {
    await apiCliente.get("/sanctum/csrf-cookie");

    let respuesta = await apiCliente.post("/api/login", data);

    return respuesta;
  },

  async register(data) {

    //await apiCliente.get("/sanctum/csrf-cookie")
    let respuesta = await apiCliente.post("/api/register", data);
    return respuesta;
  },

  async logout(data) {
    
    await apiCliente.get("/sanctum/csrf-cookie")
    let respuesta = await apiCliente.get("/api/logout")
    axios.defaults.headers.common['Authorization'] = null
    return respuesta;
  },
};