import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";

interface CustomLinkProps {
  to: string;
  children: ReactNode;
  [key: string]: any; // Allow any additional props
}

export default function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
  return (
    <li className={isActive ? "Navbar-lista-active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
