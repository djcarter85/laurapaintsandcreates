import hares from "../assets/portfolio/hares.jpg";
import newZealand from "../assets/portfolio/new-zealand.jpg";
import coast from "../assets/portfolio/coast.jpg";
import { Link } from "react-router-dom";

const CategoryLink = ({
  imgSrc,
  title,
  href,
}: {
  imgSrc: string;
  title: string;
  href: string;
}) => {
  return (
    <Link
      className="group mx-auto flex flex-col items-center justify-center gap-3"
      to={href}
    >
      <div className="aspect-square overflow-hidden rounded-xl">
        <img
          src={imgSrc}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>
      <div className="font-display text-5xl transition-transform group-hover:scale-90">
        {title}
      </div>
    </Link>
  );
};

const PortfolioPage = () => {
  return (
    <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CategoryLink
        imgSrc={hares}
        title="Wildlife"
        href="/portfolio/wildlife"
      />
      <CategoryLink
        imgSrc={coast}
        title="Landscapes"
        href="/portfolio/landscapes"
      />
      <CategoryLink
        imgSrc={newZealand}
        title="Portraits"
        href="/portfolio/portraits"
      />
    </div>
  );
};

export { PortfolioPage };
