export const INC_COUNTER = "INC_COUNTER";
export const INC_COUNTER_10 = "INC_COUNTER_10";
//thunk
export const incBy10 = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: INC_COUNTER_10 });
    }, 1000);
  };
};
