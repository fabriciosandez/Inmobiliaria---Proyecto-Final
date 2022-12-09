import API from "./Rule_api";

export const userRegister = async (userData) => {
  const url = "/api/user/register";
  return await API.post(url, userData)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error)
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
