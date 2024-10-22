import owl from "../assets/portfolio/wildlife/owl.jpeg";
import badgers from "../assets/portfolio/wildlife/badgers.jpeg";
import foxes from "../assets/portfolio/wildlife/foxes.jpg";
import otters from "../assets/portfolio/wildlife/otters.jpeg";
import polecat from "../assets/portfolio/wildlife/polecat.jpeg";

import oldHarry from "../assets/portfolio/landscapes/old-harry.jpeg";
import coast from "../assets/portfolio/landscapes/coast.jpg";
import coastPath from "../assets/portfolio/landscapes/coast-path.jpeg";
import faroes from "../assets/portfolio/landscapes/faroes.jpeg";

import lauraAndDan from "../assets/portfolio/portraits/laura-and-dan.jpeg";
import newZealand from "../assets/portfolio/portraits/new-zealand.jpg";

import joseph from "../assets/portfolio/prints/joseph.jpeg";
import bournville from "../assets/portfolio/prints/bournville.jpeg";

import { useState } from "react";

const ImageCard = ({
  imgSrc,
  setFullscreenImageSrc,
}: {
  imgSrc: string;
  setFullscreenImageSrc: (fullscreenImageSrc: string) => void;
}) => {
  return (
    <button
      className="aspect-square overflow-hidden rounded-xl"
      onClick={() => setFullscreenImageSrc(imgSrc)}
    >
      <img src={imgSrc} className="h-full w-full object-cover" />
    </button>
  );
};

const CategorySection = ({
  title,
  imgSrcs,
  setFullscreenImageSrc,
}: {
  title: string;
  imgSrcs: string[];
  setFullscreenImageSrc: (fullscreenImageSrc: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-2xl font-bold uppercase tracking-wider md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {imgSrcs.map((x) => (
          <ImageCard
            key={x}
            imgSrc={x}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
        ))}
      </div>
    </div>
  );
};

const FullscreenOverlay = ({
  fullscreenImageSrc,
  close,
}: {
  fullscreenImageSrc: string | null;
  close: () => void;
}) => {
  if (!fullscreenImageSrc) {
    return null;
  }

  return (
    <div
      className="fixed left-0 top-0 z-50 h-dvh w-dvw bg-neutral-100/80"
      onClick={close}
    >
      <div className="mx-auto h-full max-w-screen-lg p-4">
        <img
          src={fullscreenImageSrc}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  const [fullscreenImageSrc, setFullscreenImageSrc] = useState<string | null>(
    null,
  );

  return (
    <div className="my-8">
      <div className="flex flex-col gap-8">
        <CategorySection
          title="Wildlife"
          imgSrcs={[owl, badgers, foxes, otters, polecat]}
          setFullscreenImageSrc={setFullscreenImageSrc}
        />
        <CategorySection
          title="Landscapes"
          imgSrcs={[oldHarry, coast, coastPath, faroes]}
          setFullscreenImageSrc={setFullscreenImageSrc}
        />
        <CategorySection
          title="Portraits"
          imgSrcs={[lauraAndDan, newZealand]}
          setFullscreenImageSrc={setFullscreenImageSrc}
        />
        <CategorySection
          title="Prints"
          imgSrcs={[joseph, bournville]}
          setFullscreenImageSrc={setFullscreenImageSrc}
        />
      </div>
      <FullscreenOverlay
        fullscreenImageSrc={fullscreenImageSrc}
        close={() => setFullscreenImageSrc(null)}
      />
    </div>
  );
};

export { PortfolioPage };
