import { EnvelopeAt, Telephone } from "react-bootstrap-icons";
import { Hyperlink } from "../components/hyperlink";
import { Para } from "../components/para";
import { TextBlock } from "../components/text-block";

const EmailLink = ({ address }: { address: string }) => {
  return <Hyperlink href={`mailto:${address}`}>{address}</Hyperlink>;
};

const ContactPage = () => {
  return (
    <TextBlock>
      <Para>
        I'd love to hear from you! If you'd like to get in touch with me, please
        use one of the links below.
      </Para>
      <Para>
        <EnvelopeAt className="mr-2 inline" />
        <EmailLink address="fake@email.com" />
      </Para>
      <Para>
        <Telephone className="mr-2 inline" />
        <span>01234 567890</span>
      </Para>
    </TextBlock>
  );
};

export { ContactPage };
