import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './PostItem.module.scss';
import { NavLink } from 'react-router-dom';
import postOperations from '../../Redux/Posts/PostsOperations';

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.postItem}>
      <div className={styles.infoContainer}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>

      <NavLink
        to={`/post/${post.id}`}
        className={styles.link}
        onClick={() => dispatch(postOperations.getPostInfo(post.id))}
      >
        Read post
      </NavLink>
    </li>
  );
};

export default PostItem;
