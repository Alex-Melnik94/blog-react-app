import styles from './App.module.scss';
import React from 'react';
import AppBar from './Components/AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import BlogView from './Views/BlogView/BlogView';
import NewPostView from './Views/NewPostView/NewPostView';
import PostInfoView from './Views/PostInfoView/PostInfoView';

function App() {
  return (
    <div className={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<BlogView />} />
        <Route path="/create" element={<NewPostView />} />
        <Route path="/post/:id" element={<PostInfoView />} />
      </Routes>
    </div>
  );
}

export default App;
