import hares from "../assets/portfolio/hares.jpg";
import otters from "../assets/portfolio/otters.jpg";
import birthdayPheasants from "../assets/portfolio/birthday-pheasants.jpg";
import newZealand from "../assets/portfolio/new-zealand.jpg";
import stoat from "../assets/portfolio/stoat.jpg";
import foxes from "../assets/portfolio/foxes.jpg";

const PortfolioImage = ({ src }: { src: string }) => {
  return (
    <div className="aspect-square">
      <img src={src} className="h-full w-full object-cover" />
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <PortfolioImage src={hares} />
      <PortfolioImage src={otters} />
      <PortfolioImage src={birthdayPheasants} />
      <PortfolioImage src={newZealand} />
      <PortfolioImage src={stoat} />
      <PortfolioImage src={foxes} />
    </div>
  );
};

export { PortfolioPage };
