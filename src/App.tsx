import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Home } from "@/pages/home";
import { Resources } from "@/pages/resources";
import { Inspiration } from "@/pages/inspiration";
import { Tools } from "@/pages/tools";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;