import {
  ADD_CART,
  REPLACE_STOCK_CART,
  DELETE_CART,
  CLEAR_CART
} from '../types';

const INITIAL_STATE = {
  data: []
}
export default function (state=INITIAL_STATE, action={}){
  switch (action.type) {
    case ADD_CART:
      var item = action.payload;
      item.quantity = 1;
      let cart =  [
        ...state.data.slice(0, state.data.length),
        item
      ];
      return {
        ...state,
        data: cart
      };
    case REPLACE_STOCK_CART:
      var payload = action.payload;
      var existCart = state.data[payload.index];
      existCart.quantity = payload.quantity;
      return {
        ...state,
        data: state.data.slice()
      };
    case DELETE_CART:
      cart.splice(action.payload, 1);
      let data = cart.slice();
      return {
        ...state,
        data
      }
    case CLEAR_CART:
      let emptyData = [];
      return {
        ...state,
        emptyData
      }
    default:
      return state;

  }
}
