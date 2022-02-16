import styles from './Modal.module.scss';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import postOperations from '../../Redux/Posts/PostsOperations';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, post }) => {
  const dispatch = useDispatch();

  const [editTitleValue, setEditTitleValue] = useState('');
  const [editBodyValue, setEditBodyValue] = useState('');

  useEffect(() => {
    setEditTitleValue(post.title);
    setEditBodyValue(post.body);
    window.addEventListener('keydown', onEscCloseModal);
    return function cleanup() {
      window.removeEventListener('keydown', onEscCloseModal);
    };
  }, []);

  const onEscCloseModal = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  const handleTitleChange = e => {
    setEditTitleValue(e.target.value);
  };
  const handleBodyChange = e => {
    setEditBodyValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const editedPost = {
      title: editTitleValue,
      body: editBodyValue,
    };
    if (editTitleValue === '' || editBodyValue === '') {
      return toast.error('All input fields must be filled in');
    }
    dispatch(postOperations.editPost({ id: post.id, data: editedPost }));
    toggleModal();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onCloseModal}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Edit Post</h3>

        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <input
            type="text"
            value={editTitleValue}
            onChange={handleTitleChange}
            className={styles.titleInput}
          />
          <textarea
            type="text"
            value={editBodyValue}
            onChange={handleBodyChange}
            className={styles.bodyInput}
          ></textarea>
          <button type="submit" className={styles.editBtn}>
            Edit
          </button>
        </form>
      </div>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: '#ffffff',
              color: '#000000',
            },

            duration: 3000,
          },
        }}
        containerStyle={{
          top: 30,
          left: 50,
        }}
      />
    </div>,
    modalRoot,
  );
};

export default Modal;
