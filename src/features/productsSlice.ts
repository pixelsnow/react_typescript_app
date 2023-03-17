import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

const initialState = {
  products: [] as Product[], // empty array that will be populated by products
  cart: [] as Product[],
};

// createAsyncThunk basically says that this is a promise
// Thunk is middleware, it returns a function rather than a reducer
export const fetchProducts = createAsyncThunk("products/products", async () => {
  const response = await axios.get<Product[]>(api);
  return response.data;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart);
    },
  },
  extraReducers(builder) {
    // When fetchProducts is fulfilled, do this
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      }
    );
  },
});

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
