import API from "./Rule_api";

export const userLogin = async (userCredentials) => {
  const url = "/api/user/login";
  return await API.post(url, userCredentials)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      return response.data;
    })
    .catch((error) => {
      console.log(error)
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
