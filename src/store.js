import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    increase(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, increase } = user.actions;

// Cart 상태 관리
let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      let product = state.find((item) => item.id === action.payload);
      if (product) {
        product.count++;
      }
    },
    decreaseCount(state, action) {
      let product = state.find((item) => item.id === action.payload);
      if (product && product.count > 0) {
        product.count--;
      } else if (product && product.count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action) {
      let product = state.find((item) => item.id === action.payload.id);
      if (product) {
        product.count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action) {
      let index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    sortName(state) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
});

export let { addCount, decreaseCount, addItem, deleteItem, sortName } =
  cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
