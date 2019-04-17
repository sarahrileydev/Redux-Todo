export const UPDATE_TODO = 'UPDATE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export const addTodo = newTodo => {
  return {
    type: UPDATE_TODO,
    payload: newTodo
    
  }
}

export const completeTodo = id => {
  console.log(id)
  return {
    type: COMPLETE_TODO,
    payload: id
  };
};