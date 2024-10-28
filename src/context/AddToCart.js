import { create } from "zustand";

export const useProductStore = create((set, get) => ({
  products: [],
  filteredProducts: [],
  filters: {
    priceFilter: "asc",
    typeFilter: "all",
  },

  fetchProducts: async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      set({ products: data });
      get().applyFilters();
    } catch (err) {
      console.error("Error while fetching products", err);
    }
  },

  setTypeFilter: (type) => {
    set(
      (state) => ({
        filters: { ...state.filters, typeFilter: type },
      }),
      false,
      "setTypeFilter"
    );
    get().applyFilters();
  },

  setPriceFilter: (price) => {
    set(
      (state) => ({
        filters: {
          ...state.filters,
          priceFilter: price,
        },
      }),
      false,
      "setPriceFilter"
    ),
      get().applyFilters();
  },

  applyFilters: () => {
    const { products, filters } = get();
    let filtered = [...products];

    if (filters.typeFilter && filters.typeFilter !== "all") {
      filtered = filtered.filter(
        (product) => product.catSlug === filters.typeFilter
      )
    }
    if (filters.priceFilter) {
      filtered = filtered.sort((a, b) => {
        if (filters.priceFilter === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    set({ filteredProducts: filtered });
  },
}));
