import { UPDATE_TODO } from "./actions";

const initialState = {
  todos: [
    {
      value: "walk the dog",
      completed: false
    },

    {
      value: "feed the dog",
      completed: false
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        todos: [
          ...state.todos,
          { item: action.payload, id: Date.now(), completed: false }
        ]
      };

    default:
      return state;
  }
};
