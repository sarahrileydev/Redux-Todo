import { UPDATE_TODO } from './actions';

const initialState = {

  item: 'Rad Redux Title'

}

export default (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_TODO:

    return {
      ...state, //this is the prevState using the spread operator
      item: action.payload
    };

    default:
    return state;
  }

}