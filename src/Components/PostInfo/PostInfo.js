import styles from './PostInfo.module.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postInfo } from '../../Redux/Posts/PostsSelectors';
import PostInfoComments from './PostInfoComments';
import postOperations from '../../Redux/Posts/PostsOperations';
import Modal from '../Modal/Modal';

const PostInfo = () => {
  const dispatch = useDispatch();
  const post = useSelector(state => postInfo(state));
  const [activeModal, setActiveModal] = useState(false);

  const toggleModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btnEdit} onClick={toggleModal}>
        Edit
      </button>
      <button
        className={styles.btnDelete}
        onClick={() => dispatch(postOperations.deletePost(post.id))}
      >
        Delete
      </button>
      <div className={styles.postInfo}>
        <div className={styles.PostInfoContainer}>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </div>
        <PostInfoComments post={post} />
      </div>
      {activeModal && <Modal toggleModal={toggleModal} post={post} />}
    </div>
  );
};

export default PostInfo;
