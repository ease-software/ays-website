import axios from "axios";

const categoriesAPI = {
  async loadCategories() {
    const response = await axios.get("categories");
    return response.data;
  },
};

export default categoriesAPI;
