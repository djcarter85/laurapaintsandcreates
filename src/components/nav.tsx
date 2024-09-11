import cx from "classix";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ text, href }: { text: string; href: string }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cx(
        "font-display text-2xl text-primary-100 hover:text-secondary-400 md:text-4xl",
        isActive && "text-secondary-400",
      )}
    >
      {text}
    </Link>
  );
};

const Nav = () => {
  return (
    <nav className="flex flex-row justify-center gap-x-4 md:gap-x-8">
      <NavLink text="Portfolio" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="Shop" href="/shop" />
      <NavLink text="Contact" href="/contact" />
    </nav>
  );
};

export { Nav };
