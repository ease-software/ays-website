import axios from "axios";

const productsAPI = {
  async loadProducts() {
    const response = await axios.get("products");
    return response.data;
  },

  async loadProduct(id) {
    const response = await axios.get(`products/${id}`);
    return response.data;
  },
};

export default productsAPI;
