import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import NewsFeed from './components/NewsFeed';
import NewsPage from './components/NewsPage';
import Login from './pages/LoginPage';
import Signup from './pages/Signup';
import { NewsProvider } from './context/NewsContext';
import { AuthProvider } from "./context/AuthContext";

// one ceo(user) id: 68500ea2123c069e03977f30
// one channel id: 68500ebb123c069e03977f35

const App = () => {
    
  return (
    <AuthProvider>
    <NewsProvider>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <CategoryBar />
        <Routes>
          <Route path="/" element={<NewsFeed />} />
          <Route path="/news/:id" element={<NewsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </NewsProvider>
    </AuthProvider>
  );
};

export default App;
