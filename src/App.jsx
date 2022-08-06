import {Routes, Route, Link} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {About} from "./pages/Aboutpage";
import {Blog} from "./pages/Blogpage";
import {NotFound} from "./pages/Notfoundpage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/posts" element={<Blog/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;
