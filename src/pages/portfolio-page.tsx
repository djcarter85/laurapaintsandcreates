import hares from "../assets/portfolio/hares.jpg";
import newZealand from "../assets/portfolio/new-zealand.jpg";
import coast from "../assets/portfolio/coast.jpg";

const Category = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <a
      className="group mx-auto flex flex-col gap-3 items-center justify-center"
      href="#"
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
    </a>
  );
};

const PortfolioPage = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-8">
      <Category imgSrc={hares} title="Wildlife" />
      <Category imgSrc={coast} title="Landscapes" />
      <Category imgSrc={newZealand} title="Portraits" />
    </div>
  );
};

export { PortfolioPage };
