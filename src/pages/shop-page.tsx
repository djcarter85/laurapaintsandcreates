import { InternalLink } from "../components/links";
import { Para } from "../components/para";
import { TextBlock } from "../components/text-block";
import { InlineImage } from "../components/inline-image";
import newZealand from "../assets/portfolio/portraits/new-zealand.jpg";

const ShopPage = () => {
  return (
    <TextBlock>
      <Para>
        My Etsy store is coming soon; in the meantime, please{" "}
        <InternalLink href="/contact">get in contact</InternalLink> if you'd
        like to purchase any of my prints or cards!
      </Para>
      <Para>
        I am also available for commissions. If you like the look of my work
        please <InternalLink href="/contact">get in touch</InternalLink> to find
        out more!
      </Para>
      <InlineImage src={newZealand} />
    </TextBlock>
  );
};

export { ShopPage };
