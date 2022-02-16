import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';

const addPost = createAsyncThunk('posts/addPost', async (post, thunkAPI) => {
  try {
    await axios.post('/posts', post);
    toast.success('Post added!');
  } catch (error) {
    toast.error('Error');
    return thunkAPI.rejectWithValue();
  }
});

const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/posts');
      return data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue();
    }
  },
);

const getPostInfo = createAsyncThunk(
  'posts/getPostInfo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/posts/${id}?_embed=comments`);
      return data;
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue();
    }
  },
);

const addComment = createAsyncThunk(
  'posts/addComment',
  async (comment, thunkAPI) => {
    try {
      const res = await axios.post('/comments', comment);
      if (res.status === 201) {
        const { data } = await axios.get(
          `/posts/${comment.postId}?_embed=comments`,
        );
        return data;
      }
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue();
    }
  },
);

const editPost = createAsyncThunk(
  'posts/editPost',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.put(`/posts/${credentials.id}`, credentials.data);
      if (res.status === 200) {
        const { data } = await axios.get(
          `/posts/${credentials.id}?_embed=comments`,
        );
        toast.success('Post edited!');
        return data;
      }
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue();
    }
  },
);

const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/posts/${id}`);
      toast.success('Post deleted!');
    } catch (error) {
      toast.error('Error');
      return thunkAPI.rejectWithValue();
    }
  },
);

const postOperations = {
  addPost,
  getAllPosts,
  getPostInfo,
  addComment,
  editPost,
  deletePost,
};

export default postOperations;
