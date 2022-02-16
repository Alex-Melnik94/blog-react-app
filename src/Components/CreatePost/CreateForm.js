import styles from './CreateForm.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postOperations from '../../Redux/Posts/PostsOperations';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const CreatePost = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleTextChange = e => {
    setBody(e.target.value);
  };

  const resetForm = () => {
    setTitle('');
    setBody('');
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (title === '' || body === '') {
      return toast.error('All input fields must be filled in');
    }
    const post = {
      title,
      body,
    };
    dispatch(postOperations.addPost(post));
    resetForm();
  };

  return (
    <div className={styles.container}>
      <form
        autoComplete="off"
        onSubmit={onSubmitHandler}
        className={styles.form}
      >
        <label className={styles.titleLabel}>
          Tittle
          <input
            className={styles.title}
            type="text"
            name="title"
            required
            onChange={handleTitleChange}
            value={title}
          />
        </label>

        <label className={styles.bodyLabel}>
          Text
          <textarea
            className={styles.body}
            type="text"
            name="text"
            onChange={handleTextChange}
            value={body}
          ></textarea>
        </label>
        <button type="submit" className={styles.addBtn}>
          Add Post
        </button>
      </form>
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
    </div>
  );
};

export default CreatePost;
