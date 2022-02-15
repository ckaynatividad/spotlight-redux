import { createSlice, current } from '@reduxjs/toolkit';

const pink = 'rgb(236, 72, 153)';
const purple = 'rgb(100, 68, 68)';
const initialState = {
  count: 0,
  currentColor: pink,
};
function getColour(count) {
  if (count === 0) {
    return pink;
  }
  if (count > 0) {
    return 'rgb(52, 211, 153)';
  }

  if (count < 0) {
    return 'rgb(239, 68, 68)';
  }
  return pink;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure immutable data

      //This is describing the mutation to the state
      (state.count += 1), (state.currentColor = getColour(state.count + 1));
    },
    decrement: (state) => {
      (state.count -= 1), (state.currentColor = getColour(state.count - 1));
    },
    reset: (state) => {
      (state.count = 0), (state.currentColor = pink);
    },
    double: (state) => {
      (state.count *= 2), (state.currentColor = purple);
    },
  },
});

export const { increment, decrement, reset, double } = counterSlice.actions;

//Export the reducer function from the slice
export default counterSlice.reducer;
