import Movie from './movie/state';
import Modal from './modal/state';

const Context = ({ children }) => {
  return (
    <Modal>
      <Movie>
        {children}
      </Movie>
    </Modal>
  )
}

export default Context