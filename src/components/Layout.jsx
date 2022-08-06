import {Link, Outlet} from "react-router-dom";


const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <main className={"container"}>
        <Outlet/>
      </main>
      <footer><center>2022</center></footer>
    </>
  )
}

export default Layout;