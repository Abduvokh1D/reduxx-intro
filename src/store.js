//1-step! Creating initialState.
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//2-step! Creating the reducer functions. In redux usually we directly pass in the initialState as the default state.
//the reducer function is to calculate the new state based on the current state and on the received action.
function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.laon,
      };
    default:
      return {
        ...state,
      };
  }
}
