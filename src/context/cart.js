import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cartItems: [],
  priceSelected: 0,

  addItemToCart: (item) => {
    const itemExist = get().cartItems.find((cart) => cart.id === item.id);

    if (itemExist) {
      set({
        cartItems: get().cartItems.map((cart) =>
          cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        ),
      });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
  updateQuantity: (id, quantity) => {
    set({
      cartItems: get().cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      ),
    });
  },
  removeItem: (id) => {
    set({ cartItems: get().cartItems.filter((cart) => cart.id !== id) });
  },
  setPriceSelected: (price) => set({ priceSelected: price }),
}));

export default useCartStore;
