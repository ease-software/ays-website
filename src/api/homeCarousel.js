import axios from "axios";

const homeCarouselAPI = {
  async loadImages() {
    const response = await axios.get("home-carousel");
    return response.data;
  },
  
};

export default homeCarouselAPI;