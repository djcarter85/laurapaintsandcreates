import owl from "../assets/portfolio/wildlife/owl.jpeg";
import owlThumb from "../assets/portfolio/wildlife/owl-thumb.jpeg";
import badgers from "../assets/portfolio/wildlife/badgers.jpeg";
import badgersThumb from "../assets/portfolio/wildlife/badgers-thumb.jpeg";
import foxes from "../assets/portfolio/wildlife/foxes.jpg";
import otters from "../assets/portfolio/wildlife/otters.jpeg";
import ottersThumb from "../assets/portfolio/wildlife/otters-thumb.jpeg";
import polecat from "../assets/portfolio/wildlife/polecat.jpeg";
import polecatThumb from "../assets/portfolio/wildlife/polecat-thumb.jpeg";

import oldHarry from "../assets/portfolio/landscapes/old-harry.jpeg";
import coast from "../assets/portfolio/landscapes/coast.jpg";
import coastPath from "../assets/portfolio/landscapes/coast-path.jpeg";
import faroes from "../assets/portfolio/landscapes/faroes.jpeg";

import lauraAndDan from "../assets/portfolio/portraits/laura-and-dan.jpeg";
import newZealand from "../assets/portfolio/portraits/new-zealand.jpg";

import joseph from "../assets/portfolio/prints/joseph.jpeg";
import bournville from "../assets/portfolio/prints/bournville.jpeg";

import { ReactNode, useEffect, useState } from "react";

const ImageCard = ({
  imgSrc,
  thumbnailSrc,
  setFullscreenImageSrc,
}: {
  imgSrc: string;
  thumbnailSrc?: string;
  setFullscreenImageSrc: (fullscreenImageSrc: string) => void;
}) => {
  return (
    <button
      className="aspect-square overflow-hidden rounded-xl"
      onClick={() => setFullscreenImageSrc(imgSrc)}
    >
      <img
        src={thumbnailSrc ?? imgSrc}
        className="h-full w-full object-cover"
      />
    </button>
  );
};

const CategorySection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-2xl font-bold uppercase tracking-wider md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

const FullscreenOverlay = ({
  fullscreenImageSrc,
  close,
}: {
  fullscreenImageSrc: string;
  close: () => void;
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

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
        <CategorySection title="Wildlife">
          <ImageCard
            imgSrc={owl}
            thumbnailSrc={owlThumb}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={badgers}
            thumbnailSrc={badgersThumb}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={foxes}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={otters}
            thumbnailSrc={ottersThumb}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={polecat}
            thumbnailSrc={polecatThumb}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
        </CategorySection>
        <CategorySection title="Landscapes">
          <ImageCard
            imgSrc={oldHarry}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={coast}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={coastPath}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={faroes}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
        </CategorySection>
        <CategorySection title="Portraits">
          <ImageCard
            imgSrc={lauraAndDan}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={newZealand}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
        </CategorySection>
        <CategorySection title="Prints">
          <ImageCard
            imgSrc={joseph}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
          <ImageCard
            imgSrc={bournville}
            setFullscreenImageSrc={setFullscreenImageSrc}
          />
        </CategorySection>
      </div>
      {fullscreenImageSrc && (
        <FullscreenOverlay
          fullscreenImageSrc={fullscreenImageSrc}
          close={() => setFullscreenImageSrc(null)}
        />
      )}
    </div>
  );
};

export { PortfolioPage };
