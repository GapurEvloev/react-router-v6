import {NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";


const Layout = () => {
  const setActive = ({isActive}) => isActive ? "active-link" : "";

  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <NavLink className={setActive} to="/about">About</NavLink>
      </header>
      <main className={"container"}>
        <Outlet/>
      </main>
      <footer><center>2022</center></footer>
    </>
  )
}

export default Layout;