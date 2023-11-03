import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart 상태 관리
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
        product.quantity++;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * product.quantity
        ).toLocaleString();
      }
    },
    decreaseCount(state, action) {
      let product = state.items.find((item) => item.id === action.payload);
      if (product && product.quantity > 0) {
        product.quantity--;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * product.quantity
        ).toLocaleString();
      } else if (product && product.quantity === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action) {
      let product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * product.quantity
        ).toLocaleString();
        // state.items.push(action.payload);
        // state.quantity = state.items.reduce(
        //   (total, item) => total + item.quantity,
        //   0
        // );
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          finalPrice: action.payload.price,
        });
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { productId, newQuantity } = action.payload;
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity = newQuantity;
        product.finalPrice = (
          parseFloat(product.price.replace(/,/g, "")) * newQuantity
        ).toLocaleString();
      }
    },
  },
});

export const { addCount, decreaseCount, addItem, deleteItem, updateQuantity } =
  cart.actions;

const calculatePrice = createSlice({
  name: "calculatePrice",
  initialState: {
    calculateItemPrice: 0,
    totalDiscount: 0,
    totalPrice: 0,
    finalPrice: 0,
  },
  reducers: {
    calculateItemPrice(state, action) {
      const { items } = action.payload;
      const calculatedItemPrice = items.map((item) => {
        const quantity = item.quantity;
        const price = item.sale_price
          ? parseInt(item.sale_price.replace(/,/, ""))
          : parseInt(item.price.replace(/,/, ""));
        return quantity * price;
      });
      state.calculateItemPrice = calculatedItemPrice;
    },
    totalDiscount(state, action) {
      const { items } = action.payload;
      const totalDiscount = items
        .filter((item) => item.sale_price)
        .reduce((total, item) => {
          const price = parseInt(
            item.price.replace(/원/g, "").replace(/,/g, ""),
            10
          );
          const salePrice = parseInt(
            item.sale_price.replace(/원/g, "").replace(/,/g, ""),
            10
          );
          return total + (price - salePrice);
        }, 0);
      state.totalDiscount = totalDiscount;
    },
    totalPrice(state, action) {
      const { items } = action.payload;
      const totalPrice = items
        .map((item) => {
          const quantity = item.quantity;
          const price = item.sale_price
            ? parseInt(item.sale_price.replace(/,/, ""))
            : parseInt(item.price.replace(/,/, ""));
          return quantity * price;
        })
        .reduce((total, itemPrice) => {
          return total + itemPrice;
        }, 0);
      state.totalPrice = totalPrice;
    },
    finalPrice(state, action) {
      const { items } = action.payload;
      const totalPrice = items
        .map((item) => {
          const quantity = item.quantity;
          const price = item.sale_price
            ? parseInt(item.sale_price.replace(/,/, ""))
            : parseInt(item.price.replace(/,/, ""));
          return quantity * price;
        })
        .reduce((total, itemPrice) => {
          return total + itemPrice;
        }, 0);
      const shippingFee = totalPrice > 70000 ? 0 : 3500;
      const totalDiscount = items
        .filter((item) => item.sale_price)
        .reduce((total, item) => {
          const price = parseInt(
            item.price.replace(/원/g, "").replace(/,/g, ""),
            10
          );
          const salePrice = parseInt(
            item.sale_price.replace(/원/g, "").replace(/,/g, ""),
            10
          );
          return total + (price - salePrice);
        }, 0);

      const finalPrice = totalPrice + shippingFee - totalDiscount;
      state.finalPrice = finalPrice;
    },
  },
});

export const { calculateItemPrice, totalDiscount, totalPrice, finalPrice } =
  calculatePrice.actions;

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

const rootReducer = {
  selectedOptions: selectedOptions.reducer,
  cart: cart.reducer,
  calculatePrice: calculatePrice.reducer,
  detail: detail.reducer,
  products: products.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
