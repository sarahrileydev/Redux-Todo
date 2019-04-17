import { UPDATE_TODO, COMPLETE_TODO } from "./actions";

const initialState = {
  todos: [
    {
      value: "walk the dog",
      completed: false,
      id: 1
    },

    {
      value: "feed the dog",
      completed: false,
      id: 2
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        todos: [
          ...state.todos,
          { value: action.payload, id: Date.now(), completed: false }
        ]
      };

      case COMPLETE_TODO:
      const toggledTodo = [...state.todos].map(todo => {
        if (todo.value === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todos: toggledTodo
      };

    default:
      return state;
  }
};
