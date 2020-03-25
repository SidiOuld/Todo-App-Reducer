//Initial State
export const initialState = [
  { item: "Todo1", completed: false, id: Date.now() },
  { item: "Todo2", completed: false, id: Date.now() }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { item: action.payload, completed: false, id: Date.now() }
      ];

    default:
      return state;
  }
};
