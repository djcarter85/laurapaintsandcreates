import owl from "../assets/portfolio/owl.jpeg";
import oldHarry from "../assets/portfolio/old-harry.jpeg";
import lauraAndDan from "../assets/portfolio/laura-and-dan.jpeg";
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
      <div className="text-3xl transition-transform group-hover:scale-90">
        {title}
      </div>
    </Link>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <CategoryLink
          imgSrc={owl}
          title="Wildlife"
          href="/portfolio/wildlife"
        />
        <CategoryLink
          imgSrc={oldHarry}
          title="Landscapes"
          href="/portfolio/landscapes"
        />
        <CategoryLink
          imgSrc={lauraAndDan}
          title="Portraits"
          href="/portfolio/portraits"
        />
      </div>

      <div className="inline-flex h-60 w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth">
        <div id="slide1" className="relative snap-start box-content flex w-full flex-none">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative snap-start box-content flex w-full flex-none">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative snap-start box-content flex w-full flex-none">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative snap-start box-content flex w-full flex-none">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { PortfolioPage };
