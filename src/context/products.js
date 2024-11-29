import { create } from "zustand";
const useFetchProductID = create((set) => ({
  product: null,

  fetchProduct: async (id) => {
   
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const responseData = await response.json();
      set({ product: responseData,  });
    } catch (err) {
      console.error("Błąd podczas pobierania produktu:", err);
    
    }
  },
}));

export default useFetchProductID;
