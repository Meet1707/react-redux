import * as actionType from "./actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action.type === actionType.INC_COUNTER)
    return {
      counter: state.counter + 1
    };
  else if (action.type === actionType.INC_COUNTER_10)
    return {
      counter: state.counter + 10
    };
  return state;
};

export default reducer;
