import API from "./Rule_api";

export const propertyRegister = async (propertyUpload) => {
  const url = "/api/properties/upload";
  return await API.post(url, propertyUpload)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const getProperty = async (idProperty) => {
  const url = `/api/properties/${idProperty}`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};

export const getAllProperties = async () => {
  const url = `/api/properties/list`;
  return await API.get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error.response.data.error || "Error procesando la solicitud";
    });
};