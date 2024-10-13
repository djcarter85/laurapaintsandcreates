import owl from "../assets/portfolio/owl.jpeg";
import badgers from "../assets/portfolio/badgers.jpeg";
import foxes from "../assets/portfolio/foxes.jpg";
import otters from "../assets/portfolio/otters.jpeg";
import polecat from "../assets/portfolio/polecat.jpeg";

import oldHarry from "../assets/portfolio/old-harry.jpeg";
import coast from "../assets/portfolio/coast.jpg";
import coastPath from "../assets/portfolio/coast-path.jpeg";
import faroes from "../assets/portfolio/faroes.jpeg";

import lauraAndDan from "../assets/portfolio/laura-and-dan.jpeg";
import newZealand from "../assets/portfolio/new-zealand.jpg";

import joseph from "../assets/portfolio/joseph.jpeg";
import bournville from "../assets/portfolio/bournville.jpeg";

const ImageCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="aspect-square overflow-hidden rounded-xl">
      <img src={imgSrc} className="h-full w-full object-cover" />
    </div>
  );
};

const CategorySection = ({
  title,
  imgSrcs,
}: {
  title: string;
  imgSrcs: string[];
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-2xl font-bold uppercase tracking-wider md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {imgSrcs.map((x) => (
          <ImageCard key={x} imgSrc={x} />
        ))}
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="my-8">
      <div className="flex flex-col gap-8">
        <CategorySection
          title="Wildlife"
          imgSrcs={[owl, badgers, foxes, otters, polecat]}
        />
        <CategorySection
          title="Landscapes"
          imgSrcs={[oldHarry, coast, coastPath, faroes]}
        />
        <CategorySection
          title="Portraits"
          imgSrcs={[lauraAndDan, newZealand]}
        />
        <CategorySection title="Prints" imgSrcs={[joseph, bournville]} />
      </div>
    </div>
  );
};

export { PortfolioPage };
