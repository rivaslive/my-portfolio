import Container from 'components/Atoms/Container';
import { Col, Row } from 'components/Atoms/Grid';
import Image from 'components/Atoms/Image';
import Form from 'components/Atoms/Form';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';

type ContactProps = BaseComponent & {};

const Contact = (props: ContactProps) => {
  return (
    <Container {...props}>
      <Row gutter={30} align="middle">
        <Col xs={24} md={12}>
          <Image
            alt="kevin rivas"
            width="100%"
            height={400}
            src="/my-present.png"
          />
        </Col>

        <Col xs={24} md={12}>
          <Form style={{ maxWidth: 400, margin: '0 auto' }}>
            <Title htmlTag="h3">
              Contact{' '}
              <Title htmlTag="span" color="primaryGradient">
                with me
              </Title>
            </Title>
            <Form.Item name="email" label="Email">
              <Input placeholder="mail@example.com" />
            </Form.Item>
            <Form.Item name="subject" label="Subject">
              <Input placeholder="Message title" />
            </Form.Item>
            <Form.Item name="message" label="Message">
              <Input rows={7} htmlTag="textarea" placeholder="Message title" />
            </Form.Item>
            <Form.Item>
              <Button style={{ width: '100%' }}>CONTACT ME NOW!</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
