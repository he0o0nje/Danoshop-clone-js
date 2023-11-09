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
        id: "12",
        image: "/img/main/3pm/01.png",
        name: "[다노] 프로틴 snack eat 옥수수맛_저칼로리 식단관리 간식",
        price: "2,600원",
        sale_price: "2,080원",
        option: "프로틴 snack eat 옥수수맛(1개)",
        quantity: 5,
      },
      {
        id: "16",
        image: "/img/main/6pm/01.webp",
        name: "[다노] 단백질 도시락 7종 세트_식단관리 고단백 냉동도시락",
        price: "31,500원",
        sale_price: "",
        option: "단백질 도시락(1세트)",
        quantity: 1,
      },
      {
        id: "9",
        image: "/img/main/1pm/03.png",
        name: "[다노] 닭가슴살 큐브_식단관리 닭가슴살",
        price: "10,000원",
        sale_price: "",
        option: "큐브 닭가슴살_오리지널(5개)",
        quantity: 3,
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
    // updateQuantity(state, action) {
    //   const { productId, newQuantity } = action.payload;
    //   const product = state.items.find((item) => item.id === productId);
    //   if (product) {
    //     product.quantity = newQuantity;
    //     product.finalPrice = (
    //       parseFloat(product.price.replace(/,/g, "")) * newQuantity
    //     ).toLocaleString();
    //   }
    // },
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
          return total + (price - salePrice) * item.quantity;
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
