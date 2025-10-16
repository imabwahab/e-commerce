import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { dummyProducts, type Product } from "../assets/assets";
import toast from 'react-hot-toast';

interface AppState {
  products: Product[];
  wishList: Record<string, boolean>;
  cartItems: Record<string, number>;
  search: string;
}

const initialState: AppState = {
  products: dummyProducts,
  wishList: {},
  cartItems: {},
  search: ''
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleWishList: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const isInWishList = !!state.wishList[id];
      state.wishList[id] = !isInWishList;
      if (isInWishList) toast.error("Removed from wishlist")
      else toast.success('Added to wishlist')
    },
    addToCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.cartItems[id] = (state.cartItems[id] || 0) + 1;
      toast.success('Added to cart');
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.cartItems[id]) {
        state.cartItems[id] -= 1;
        if (state.cartItems[id] === 0) delete state.cartItems[id];
        toast.success("Removed from cart")
      }
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      delete state.cartItems[id];
      toast.success('Item deleted successfully.');
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    aToZ: (state) => {
      state.products.sort((a, b) => a.name.localeCompare(b.name));
    },
    zToA: (state) => {
      state.products.sort((a, b) => b.name.localeCompare(a.name));
    },
    lowestPrice: (state) => {
      state.products.sort((a, b) => a.offerPrice - b.offerPrice);
    },
    highestPrice: (state) => {
      state.products.sort((a, b) => b.offerPrice - a.offerPrice);
    },

  }
});


export const {
  toggleWishList,
  addToCart,
  removeFromCart,
  deleteFromCart,
  setSearch,
  aToZ,
  zToA,
  lowestPrice,
  highestPrice,
} = appSlice.actions;

export default appSlice.reducer;