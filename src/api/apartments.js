import axios from "axios";

const apartmentsAPI = {
  async loadApartments() {
    const response = await axios.get("apartments");
    return response.data;
  },
  
  async loadApartment(id) {
    const response = await axios.get(`apartments/${id}`);
    return response.data;
  },
};

export default apartmentsAPI;
