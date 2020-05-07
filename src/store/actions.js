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
const abc = () => ({ type: INC_COUNTER_10 })
export const inc = () => dispatch => {
  console.log("HEllo");
  dispatch(abc())
}