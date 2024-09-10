const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <a
      href={href}
      className="font-display text-3xl text-primary-800 hover:text-secondary-600 lg:text-4xl"
    >
      {text}
    </a>
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
