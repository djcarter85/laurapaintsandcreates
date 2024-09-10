import cx from "classix";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cx("font-display text-3xl text-primary-800 hover:text-secondary-600 lg:text-4xl", isActive && "text-secondary-600")}
    >
      {text}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="my-4 flex flex-row justify-center gap-4 lg:flex-col lg:justify-start">
      <NavLink text="Portfolio" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="Shop" href="/shop" />
      <NavLink text="Contact" href="/contact" />
    </nav>
  );
};

export { Nav };
