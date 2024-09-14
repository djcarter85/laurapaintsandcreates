import owl from "../assets/portfolio/owl.jpeg";
import otters from "../assets/portfolio/otters.jpeg";
import oldHarry from "../assets/portfolio/old-harry.jpeg";
import lauraAndDan from "../assets/portfolio/laura-and-dan.jpeg";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

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

const CarouselSlide = ({
  id,
  imgSrc,
  prevId,
  nextId,
}: {
  id: string;
  imgSrc: string;
  prevId: string;
  nextId: string;
}) => {
  return (
    <div
      id={id}
      className="relative box-content flex w-full flex-none snap-start"
    >
      <img src={imgSrc} className="w-11/12 rounded-lg" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a
          href={`#${prevId}`}
          className="flex size-10 items-center justify-center rounded-full bg-primary-100/80"
        >
          <ChevronLeft />
        </a>
        <a
          href={`#${nextId}`}
          className="flex size-10 items-center justify-center rounded-full bg-primary-100/80"
        >
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="inline-flex w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth">
      <CarouselSlide
        id="slide1"
        imgSrc={owl}
        prevId="slide4"
        nextId="slide2"
      />{" "}
      <CarouselSlide
        id="slide2"
        imgSrc={otters}
        prevId="slide1"
        nextId="slide3"
      />{" "}
      <CarouselSlide
        id="slide3"
        imgSrc="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
        prevId="slide2"
        nextId="slide4"
      />{" "}
      <CarouselSlide
        id="slide4"
        imgSrc="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
        prevId="slide3"
        nextId="slide1"
      />
    </div>
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

      <Carousel />
    </>
  );
};

export { PortfolioPage };
