import axios from "axios";

const productsAPI = {
  async loadProducts() {
    const response = await axios.get("products");
    return response.data;
  },
};

export default productsAPI;
