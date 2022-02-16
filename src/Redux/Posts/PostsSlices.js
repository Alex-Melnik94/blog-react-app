import { createSlice } from '@reduxjs/toolkit';
import postOperations from './PostsOperations';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: [],
    post: {},
    loader: false,
  },
  extraReducers: {
    [postOperations.addPost.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.addPost.fulfilled]: (state, action) => {
      state.loader = false;
    },
    [postOperations.addPost.rejected]: (state, action) => {
      state.loader = false;
    },
    [postOperations.getAllPosts.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.getAllPosts.fulfilled]: (state, action) => {
      state.items = [...action.payload];
      state.loader = false;
    },
    [postOperations.getAllPosts.rejected]: (state, action) => {
      state.loader = false;
    },
    [postOperations.getPostInfo.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.getPostInfo.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loader = false;
    },
    [postOperations.getPostInfo.rejected]: (state, action) => {
      state.loader = false;
    },
    [postOperations.addComment.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.addComment.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loader = false;
    },
    [postOperations.addComment.rejected]: (state, action) => {
      state.loader = false;
    },
    [postOperations.editPost.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.editPost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loader = false;
    },
    [postOperations.editPost.rejected]: (state, action) => {
      state.loader = false;
    },
    [postOperations.deletePost.pending]: (state, action) => {
      state.loader = true;
    },
    [postOperations.deletePost.fulfilled]: (state, action) => {
      state.post = '';
      state.loader = false;
    },
    [postOperations.deletePost.rejected]: (state, action) => {
      state.loader = false;
    },
  },
});

export default postsSlice.reducer;
