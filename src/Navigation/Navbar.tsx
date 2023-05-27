import { AiFillGithub } from "react-icons/ai";
import { Outlet} from "react-router-dom";
import CustomLink from './function/Active-nav'
import { BiNote } from "react-icons/bi";
export default function  Navbar() {
  return (
    <>
      <header>
          <nav className="Navbar">
            <ul className="Navbar-logo">
              <h1>
                Sticky
                <BiNote />
              </h1>
            </ul>
            <section className="Navbar-Lista">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink
                target="_blank"
                to="https://github.com/touma0dev/react-project-postit"
              >
                Git
                <AiFillGithub />
              </CustomLink>
              <CustomLink to="/sobre">Sobre</CustomLink>
            </section>
          </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
