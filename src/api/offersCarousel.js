import axios from "axios";

const offersCarouselAPI = {
  async loadItems() {
    const response = await axios.get("offers-carousel");
    return response.data;
  },
};

export default offersCarouselAPI;