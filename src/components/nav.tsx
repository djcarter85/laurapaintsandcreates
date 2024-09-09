const NavLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="font-display text-3xl text-primary-800 hover:text-secondary-600 lg:text-4xl"
    >
      {text}
    </a>
  );
};

const Nav = () => {
  return (
    <nav className="my-4 flex flex-row justify-center gap-4 lg:flex-col lg:justify-start">
      <NavLink text="Portfolio" />
      <NavLink text="About" />
      <NavLink text="Shop" />
      <NavLink text="Contact" />
    </nav>
  );
};

export { Nav };
