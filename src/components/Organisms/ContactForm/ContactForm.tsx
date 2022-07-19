import Title from 'components/Atoms/Title';
import Form from 'components/Atoms/Form';
import Input from 'components/Atoms/Input';
import Button from 'components/Atoms/Button';
import { Col, Row } from 'components/Atoms/Grid';
import Dropdown from 'components/Atoms/Dropdown';

type ContactFormProps = BaseComponent & {};

type FormType = {
  email: string;
  subject: string;
  name: string;
  message: string;
};

const ContactForm = ({ style = {}, ...props }: ContactFormProps) => {
  const onSubmit = (values: FormType) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onSubmit}
      style={{ maxWidth: 400, margin: '0 auto', ...style }}
      {...props}
    >
      <Title htmlTag="h3">
        Contact{' '}
        <Title htmlTag="span" color="primaryGradient">
          with me
        </Title>
      </Title>
      <Form.Item
        isRequired
        name="email"
        label="Email"
        rules={[{ type: 'email' }]}
      >
        <Input placeholder="mail@example.com" />
      </Form.Item>
      <Row
        gutter={[
          { xs: 0, md: 20 },
          { xs: 20, md: 0 }
        ]}
      >
        <Col xs={24} md={12}>
          <Form.Item name="subject" label="Subject" isRequired>
            <Dropdown
              menu={
                <Dropdown.Menu>
                  <Dropdown.Item key="start-project">
                    Start Project
                  </Dropdown.Item>
                  <Dropdown.Item key="freelance">Free Lance</Dropdown.Item>
                  <Dropdown.Item key="contractor">Contractor</Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              --- Select a option ---
            </Dropdown>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item name="fullName" label="Full Name" isRequired>
            <Input placeholder="John Artur" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="message" label="Message" isRequired>
        <Input rows={7} htmlTag="textarea" placeholder="Message title" />
      </Form.Item>
      <Form.Item>
        <Button
          bgColor="primaryGradient"
          type="submit"
          style={{ width: '100%', marginTop: 20 }}
        >
          CONTACT ME NOW!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
