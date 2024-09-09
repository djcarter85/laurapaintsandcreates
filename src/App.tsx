import cx from "classix";
import { ReactNode } from "react";
import { Heading } from "./components/heading";
import { Subheading } from "./components/subheading";
import { Nav } from "./components/nav";
import { Para } from "./components/para";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Container } from "./components/container";

const ColourFamily = ({ children }: { children: ReactNode }) => {
  return (
    <div className="my-2 flex flex-row justify-center gap-1 lg:gap-3">
      {children}
    </div>
  );
};

const Swatch = ({ className }: { className: string }) => {
  return <div className={cx("size-4 rounded-md lg:size-8", className)}></div>;
};

function App() {
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          <Nav />
          <div className="px-4 py-4">
            <ColourFamily>
              <Swatch className="bg-primary-50" />
              <Swatch className="bg-primary-100" />
              <Swatch className="bg-primary-200" />
              <Swatch className="bg-primary-300" />
              <Swatch className="bg-primary-400" />
              <Swatch className="bg-primary-500" />
              <Swatch className="bg-primary-600" />
              <Swatch className="bg-primary-700" />
              <Swatch className="bg-primary-800" />
              <Swatch className="bg-primary-900" />
              <Swatch className="bg-primary-950" />
            </ColourFamily>
            <ColourFamily>
              <Swatch className="bg-secondary-50" />
              <Swatch className="bg-secondary-100" />
              <Swatch className="bg-secondary-200" />
              <Swatch className="bg-secondary-300" />
              <Swatch className="bg-secondary-400" />
              <Swatch className="bg-secondary-500" />
              <Swatch className="bg-secondary-600" />
              <Swatch className="bg-secondary-700" />
              <Swatch className="bg-secondary-800" />
              <Swatch className="bg-secondary-900" />
              <Swatch className="bg-secondary-950" />
            </ColourFamily>
            <ColourFamily>
              <Swatch className="bg-neutral-50" />
              <Swatch className="bg-neutral-100" />
              <Swatch className="bg-neutral-200" />
              <Swatch className="bg-neutral-300" />
              <Swatch className="bg-neutral-400" />
              <Swatch className="bg-neutral-500" />
              <Swatch className="bg-neutral-600" />
              <Swatch className="bg-neutral-700" />
              <Swatch className="bg-neutral-800" />
              <Swatch className="bg-neutral-900" />
              <Swatch className="bg-neutral-950" />
            </ColourFamily>
            <Heading>Heading</Heading>
            <Subheading>Subheading</Subheading>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pellentesque, leo ut bibendum ornare, nulla enim porttitor tortor,
              vel porttitor turpis lectus a felis. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus fringilla, ante in
              scelerisque pulvinar, sapien tortor efficitur risus, a varius
              lectus velit non lorem. Suspendisse aliquet molestie ex vitae
              eleifend. Duis vel nunc tellus. Vestibulum lacus tortor, congue
              non facilisis non, mattis interdum lacus. Nam id congue nulla,
              eget hendrerit lectus. Praesent faucibus mauris vitae rutrum
              iaculis. Sed mi turpis, tempor sed odio ac, fringilla vehicula
              dolor. Curabitur sit amet facilisis sapien. Aliquam urna risus,
              facilisis quis elit vel, commodo molestie lorem. Mauris malesuada
              augue non ullamcorper vulputate. Donec vehicula efficitur porta.
              Sed non leo vitae velit accumsan pretium.
            </Para>
            <Para>
              Proin posuere sit amet nisl at pellentesque. Maecenas mattis vitae
              justo id aliquet. Sed suscipit diam ac tortor lacinia vehicula ac
              id sem. Mauris velit odio, tempor ac ante non, consectetur posuere
              dolor. Maecenas ac velit finibus, luctus nisi in, fringilla quam.
              Suspendisse ac augue vel ex posuere eleifend vel ut urna. Nullam
              sit amet dui purus. Maecenas sagittis vehicula urna, in gravida
              libero posuere quis. Donec aliquet iaculis lectus in egestas.
              Quisque suscipit lectus ac varius aliquet. Quisque a metus
              condimentum, aliquam nibh vitae, cursus lectus. Maecenas molestie
              arcu vitae leo facilisis, eget feugiat lacus fermentum. Nam eget
              tellus ultrices, malesuada lacus nec, semper purus. Vivamus velit
              diam, blandit eu purus eget, sagittis mollis nulla. In tortor ex,
              suscipit at placerat non, suscipit id enim. Sed elementum ornare
              tincidunt.
            </Para>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
