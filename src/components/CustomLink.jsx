import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
  let match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "var(--color-active)" : "white",
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink;