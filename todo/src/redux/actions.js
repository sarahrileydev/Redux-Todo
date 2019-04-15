export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = newTodo => {
  return {
    type: UPDATE_TODO,
    payload: newTodo
    
  }
}