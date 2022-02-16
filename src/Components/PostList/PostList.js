import React from 'react';
import { useSelector } from 'react-redux';
import { allPosts } from '../../Redux/Posts/PostsSelectors';
import PostItem from '../PostItem/PostItem';
import styles from './PostList.module.scss';
import { v4 as uuidv4 } from 'uuid';

const PostList = () => {
  const posts = useSelector(state => allPosts(state));

  return (
    <div>
      {posts.length === 0 ? (
        <h2>There are no posts yet</h2>
      ) : (
        <ul className={styles.postList}>
          {posts.map(post => {
            return <PostItem key={uuidv4()} post={post} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default PostList;
