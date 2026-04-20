import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { BlogPost } from './pages/BlogPost';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/hallucination-architecture" element={<BlogPost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
