import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart 상태 관리
let cart = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        id: "1",
        image: "/img/main/7am/01.png",
        name: "[다노] 자이언트 브라운라이스소울 프로틴 2종_식사대용 현미 시리얼 그래놀라",
        price: "32,000원",
        sale_price: "29,000원",
        option: "자이언트 브라운라이스소울 프로틴_베리",
        quantity: 2,
      },
      {
        id: "2",
        image: "/img/main/7am/02.webp",
        name: "[다노] 브라운라이스소울 프로틴 2종_식사대용 현미 시리얼 그래놀라",
        price: "7,500원",
        sale_price: "",
        option: "브라운라이스소울 프로틴 _베리(3개)",
        quantity: 1,
      },
      {
        id: "3",
        image: "/img/main/7am/03.jpg",
        name: "[다노] 흑임자죽_단백질 프로틴 식사대용죽",
        price: "9,600원",
        sale_price: "",
        option: "흑임자죽(4개)",
        quantity: 1,
      },
    ],
  },
  reducers: {
    addCount(state, action) {
      let product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.count++;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * product.count
        ).toLocaleString();
      }
    },
    decreaseCount(state, action) {
      let product = state.items.find((item) => item.id === action.payload);
      if (product && product.count > 0) {
        product.count--;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * product.count
        ).toLocaleString();
      } else if (product && product.count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action) {
      // let product = state.items.find((item) => item.id === action.payload.id);
      // if (product) {
      //   product.count++;
      //   product.finalPrice = (
      //     parseFloat(product.price.replace(/,/g, "")) * product.count
      //   ).toLocaleString();
      // } else {
      //   state.items.push({
      //     ...action.payload,
      //     count: 1,
      //     finalPrice: action.payload.price,
      //   });
      // }
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const updatedItem = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === updatedItem.id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex] = updatedItem;
      }
    },
    calculateFinalPrice: (state) => {
      state.items.forEach((item) => {
        item.finalPrice = (
          parseFloat(item.price.replace(/,/g, "")) * item.count
        ).toLocaleString();
      });
    },
  },
});

export const {
  addCount,
  decreaseCount,
  addItem,
  deleteItem,
  sortName,
  calculateFinalPrice,
} = cart.actions;

const detail = createSlice({
  name: "detail",
  initialState: {},
  reducers: {
    setDetail(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setDetail } = detail.actions;

const products = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setProducts } = products.actions;

const selectedOptions = createSlice({
  name: "selectedOptions",
  initialState: [],
  reducers: {
    addSelectedOption(state, action) {
      state.push(action.payload);
    },
    removeSelectedOption(state, action) {
      return state.filter((option) => option !== action.payload);
    },
    clearSelectedOptions(state) {
      return [];
    },
  },
});

export const { addSelectedOption, removeSelectedOption, clearSelectedOptions } =
  selectedOptions.actions;

const rootReducer = {
  cart: cart.reducer,
  detail: detail.reducer,
  products: products.reducer,
  selectedOptions: selectedOptions.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
