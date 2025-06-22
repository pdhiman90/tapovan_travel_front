import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API_BASE_URL:", API_BASE_URL);

export const updatePaymentStatus = async (status,paymentId) => {
  try {
    const response = await axios.patch(
      `${API_BASE_URL}/api/payment/update/${paymentId}`,
      { status,paymentId },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const createPaymentdb=async(payload)=>{
  try {
    const response = await axios.post(`${API_BASE_URL}/api/payment/create`,payload,{
      headers:{
        "Content-Type":"application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
}

// export default {updatePaymentStatus,createPaymentdb}
