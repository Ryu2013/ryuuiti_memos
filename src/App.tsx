import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Article1 from './blog/article-1';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/article-1" element={<Article1 />} />
    </Routes>
  );
};

export default App;