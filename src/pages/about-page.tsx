import { Para } from "../components/para";
import profile from "../assets/profile.jpeg";
import { TextBlock } from "../components/text-block";
import { InternalLink } from "../components/links";

const AboutPage = () => {
  return (
    <TextBlock>
      <img
        src={profile}
        className="mx-auto mb-8 size-48 rounded-full md:size-60"
      />
      <Para>Hello there!</Para>
      <Para>
        I'm Laura, and I'm an illustrator based in Cambridgeshire, UK.
      </Para>
      <Para>
        I've been creating for as long as I can remember. I love wildlife, the
        outdoors and bright colours, all of which inspire my illustrations. I
        mostly create digital art, including prints, cards and other small
        gifts.
      </Para>
      <Para>
        I've worked with a variety of clients, including small businesses,
        charities and individuals. If you're interested in working with me,
        visit my <InternalLink href="/contact">Contact page</InternalLink> and
        send me a message!
      </Para>
      <Para>I live in Cambridgeshire with my husband and our two cats.</Para>
    </TextBlock>
  );
};

export { AboutPage };
