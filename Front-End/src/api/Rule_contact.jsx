import API from "./Rule_api";

export const contactMessage = async (message) => {
  const url = "/api/user/contact";
  return await API.post(url, message)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error)
      throw error.response.data.error || "Error procesando la solicitud";
    });
};