import { useReducer } from 'react';
import ModalContext from './context';
import modalReducer from './reducer';
import { TOGGLE_MODAL, LOAD_VIDEO } from 'types/modal';

const ModalState = ({ children }) => {

  const initialState = {
    show: false,
    video: null,
  };

  const [ state, dispatch ] = useReducer(modalReducer, initialState);

  const toggleModal = () => {
    dispatch({
      type: TOGGLE_MODAL
    })
  };

  const loadVideo = (params) => {
    dispatch({
      type: LOAD_VIDEO,
      payload: params
    })
  };

  const { show, video } = state;

  return (
    <ModalContext.Provider value={{
      show,
      video,
      toggleModal,
      loadVideo,
    }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalState