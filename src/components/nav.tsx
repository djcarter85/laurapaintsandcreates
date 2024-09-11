import cx from "classix";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cx(
        "font-display text-2xl text-primary-800 hover:text-secondary-600 md:text-3xl lg:text-4xl",
        isActive && "text-secondary-600",
      )}
    >
      {text}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="my-4 flex flex-row justify-center gap-x-4 gap-y-4 md:gap-x-6 lg:flex-col lg:justify-start lg:px-6 lg:my-6">
      <NavLink text="Portfolio" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="Shop" href="/shop" />
      <NavLink text="Contact" href="/contact" />
    </nav>
  );
};

export { Nav };
