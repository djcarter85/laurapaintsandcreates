import hares from "../assets/portfolio/hares.jpg";
import newZealand from "../assets/portfolio/new-zealand.jpg";
import coast from "../assets/portfolio/coast.jpg";

const Category = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-primary-200 p-4">
      <div className="aspect-square rounded-xl">
        <img src={imgSrc} className="h-full w-full rounded-lg object-cover" />
      </div>
      <div className="text-center text-2xl">{title}</div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Category imgSrc={hares} title="Wildlife" />
      <Category imgSrc={coast} title="Landscapes" />
      <Category imgSrc={newZealand} title="Portraits" />
    </div>
  );
};

export { PortfolioPage };
