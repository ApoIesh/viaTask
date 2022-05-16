import {GET_DATA, GET_DATA_SUCCESS} from '../actions/types';

const INITAL_STATE = {
  data: [],
};

export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      return {...state};
    case GET_DATA_SUCCESS:
      return {...state, data: action.payload.articles};
    default:
      return state;
  }
};
