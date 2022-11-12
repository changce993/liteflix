import { TOGGLE_MODAL, LOAD_VIDEO } from 'types/modal';

const moviesReducer = (state, action) => {
  switch(action.type){
    case TOGGLE_MODAL:
      return {
        ...state,
        show: !state.show
      }
    case LOAD_VIDEO:
      return {
        ...state,
        video: action.payload
      }
    default:
      return state
  }
};

export default moviesReducer;