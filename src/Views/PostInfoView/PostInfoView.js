import styles from './PostInfoView.module.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { postInfo } from '../../Redux/Posts/PostsSelectors';
import PostInfo from '../../Components/PostInfo/PostInfo';
import { NavLink } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const PostInfoView = () => {
  const post = useSelector(state => postInfo(state));

  return (
    <div className={styles.container}>
      {post ? (
        <PostInfo />
      ) : (
        <div className={styles.linkContainer}>
          <NavLink to="/" className={styles.btn}>
            All Posts
          </NavLink>
          <NavLink to="/create" className={styles.btn}>
            + Create New Post
          </NavLink>
        </div>
      )}
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

export default PostInfoView;
