import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import postOperations from '../../Redux/Posts/PostsOperations';
import PostList from '../../Components/PostList/PostList';
import styles from './BlogView.module.scss';

const BlogView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postOperations.getAllPosts());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bloggy</h1>
      <PostList />
    </div>
  );
};

export default BlogView;
