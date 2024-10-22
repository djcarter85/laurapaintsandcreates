import { EnvelopeAt } from "react-bootstrap-icons";
import { ExternalLink } from "../components/links";
import { Para } from "../components/para";
import { TextBlock } from "../components/text-block";
import { FacebookUrl, InstagramUrl } from "../constants";
import { InlineImage } from "../components/inline-image";
import oldHarry from "../assets/portfolio/landscapes/old-harry.jpeg";

const EmailLink = ({ address }: { address: string }) => {
  return <ExternalLink href={`mailto:${address}`}>{address}</ExternalLink>;
};

const ContactPage = () => {
  return (
    <TextBlock>
      <Para>
        If you'd like to work with me, then I'd love to hear from you! Please do
        get in touch using the email address below.
      </Para>
      <Para>
        <EnvelopeAt className="mr-2 inline" />
        <EmailLink address="laurapaintsandcreates@outlook.com" />
      </Para>
      <Para>
        You can also contact me via DM on{" "}
        <ExternalLink href={InstagramUrl}>Instagram</ExternalLink> or{" "}
        <ExternalLink href={FacebookUrl}>Facebook</ExternalLink>.
      </Para>
      <InlineImage src={oldHarry} />
    </TextBlock>
  );
};

export { ContactPage };
