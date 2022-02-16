import styles from './PostInfo.module.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import postOperations from '../../Redux/Posts/PostsOperations';
import { v4 as uuidv4 } from 'uuid';

const PostInfoComments = ({ post }) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState('');

  const handleInputChange = e => {
    setBody(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const comment = {
      postId: post.id,
      body,
    };
    dispatch(postOperations.addComment(comment, post.id));
    setBody('');
  };

  return (
    <div className={styles.commentsContainer}>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={handleInputChange}
          value={body}
          placeholder="Leave your comment..."
        />
        <button type="submit" className={styles.addBtn}>
          Add Comment
        </button>
      </form>
      <div className={styles.comments}>
        {post.comments === undefined || post.comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          post.comments.map(comment => {
            return <p key={uuidv4()}>• {comment.body}</p>;
          })
        )}
      </div>
    </div>
  );
};

export default PostInfoComments;
