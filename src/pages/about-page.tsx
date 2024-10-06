import { Para } from "../components/para";
import profile from "../assets/profile.jpeg";
import { TextBlock } from "../components/text-block";

const AboutPage = () => {
  return (
    <TextBlock>
      <img src={profile} className="mx-auto mb-4 size-48 rounded-full" />
      <Para>Hi! I'm Laura.</Para>
      <Para>
        I've been creating for as long as I can remember. I love wildlife and
        the outdoors and this is reflected in my artwork. Cats are great. So is
        Jesus.
      </Para>
      <Para>I live in Cambridgeshire with my husband and our two cats.</Para>
    </TextBlock>
  );
};

export { AboutPage };
