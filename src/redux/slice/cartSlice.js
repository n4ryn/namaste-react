import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Mutating the state here

      /**
       * Vanilla(older) Redux => Don't mutate state, returning was mandatory
       *
       * const newState = [...state]
       * newState.items.push(action.payload)
       *
       * return newState
       */

      /**
       * Redux Toolkit
       * We have to mutate the state
       *
       * RTK uses Immer package behind the scenes
       *
       * Immer is a tiny package that allows you to work with immutable
       * state in a more convenient way.
       * It create the next immutable state tree by simply modifying
       * the current tree
       */
      state?.items?.push(action?.payload);
    },
    removeItem: (state, action) => {
      state?.items?.pop();
    },
    clearCart: (state, action) => {
      // current helps us to view the content of state without current the console will log a Proxy(object)
      // console.log(current(state));

      // state is a local variable

      // Original state = { items: ["pizza"] }

      state.items.length = 0;
      /**
       * This will make the original state empty
       * { items: [] }
       *
       * state.items.length = 0 modifies the original state
       * Local state = { items: [] }
       * Original state = { items: [] }
       */

      // state.items = [];
      /**
       * This will make the local state empty
       * { items = [] }
       *
       * state.items = [] modifies the local state
       * Local state = { items: [] }
       * Original state = { items: ["pizza"] }
       */

      /**
       * RTK - either mutate the existing state or return a new state
       *
       * state.items.length = 0; // Original state = { items: [] }
       *
       * OR
       *
       * return { items: [] }; // the new object will be replaced inside
       * Original state = { items: [] }
       */
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
