const NavLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="font-display text-primary-800 hover:text-secondary-600 py-2 text-4xl"
    >
      {text}
    </a>
  );
};

const Nav = () => {
  return (
    <nav className="my-4 flex flex-col">
      <NavLink text="Portfolio" />
      <NavLink text="About" />
      <NavLink text="Shop" />
      <NavLink text="Contact" />
    </nav>
  );
};

export { Nav };
