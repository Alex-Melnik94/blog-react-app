import styles from './NewPost.module.scss';
import React from 'react';
import CreatePost from '../../Components/CreatePost/CreateForm';

const NewPostView = () => {
  return (
    <div className={styles.container}>
      <CreatePost />
    </div>
  );
};

export default NewPostView;
