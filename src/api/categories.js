import axios from "axios";

const categoriesAPI = {
  async loadCategories() {
    const response = await axios.get("categories");
    return response.data;
  },
  
  async loadCategory(id) {
    const response = await axios.get(`categories/${id}`);
    return response.data;
  },
};

export default categoriesAPI;
