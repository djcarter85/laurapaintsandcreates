import { ExternalLink, InternalLink } from "../components/links";
import { Para } from "../components/para";
import { TextBlock } from "../components/text-block";
import { InlineImage } from "../components/inline-image";
import newZealand from "../assets/portfolio/portraits/new-zealand.jpg";
import { EtsyUrl } from "../constants";

const ShopPage = () => {
  return (
    <TextBlock>
      <Para>
        You can visit my Etsy store at{" "}
        <ExternalLink href={EtsyUrl}>
          lpaintsandcreates
        </ExternalLink>
        , where I sell prints, cards and various other small gifts.
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
