import {Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/Homepage";
import {About} from "./pages/Aboutpage";
import {Blog} from "./pages/Blogpage";
import {NotFound} from "./pages/Notfoundpage";
import Layout from "./components/Layout";
import SinglePage from "./pages/SinglePage";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Homepage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/posts" element={<Blog/>} />
          <Route path="/posts/:id" element={<SinglePage/>} />
          <Route path="/posts/new" element={<CreatePost/>} />
          <Route path="/posts/:id/edit" element={<EditPost/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
