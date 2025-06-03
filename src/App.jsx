import React from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import NewsFeed from './components/NewsFeed';
import { NewsProvider } from './context/NewsContext';

const App = () => {
  return (
    <NewsProvider>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <CategoryBar />
        <NewsFeed />
      </div>
    </NewsProvider>
  );
};

export default App;
