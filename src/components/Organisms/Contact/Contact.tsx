import { Col, Row } from 'components/Atoms/Grid';
import Container from 'components/Atoms/Container';
import ContactForm from 'components/Organisms/ContactForm';

import { StyleImage } from './style';

type ContactProps = BaseComponent & {};

const Contact = (props: ContactProps) => {
  return (
    <Container {...props}>
      <Row gutter={30} align="middle">
        <Col xs={24} md={12}>
          <StyleImage
            alt="kevin rivas"
            width="100%"
            height={400}
            src="/me/me-code.webp"
          />
        </Col>

        <Col xs={24} md={12}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
