import axios from "axios";

export const uploadImages = async (formData, path, token) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8000/uploadImages",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
