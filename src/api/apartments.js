import axios from "axios";

const apartmentsAPI = {
  async loadApartments() {
    const response = await axios.get("apartments");
    return response.data;
  },
  async loadFeaturedApartments() {
    const response = await axios.get("apartments?featured=1");
    return response.data;
  },
  async loadApartmentsInCategory(category) {
    const response = await axios.get(`apartments?category=${category}`);
    return response.data;
  },

  async loadApartment(id) {
    const response = await axios.get(`apartments/${id}`);
    return response.data;
  },
};

export default apartmentsAPI;
