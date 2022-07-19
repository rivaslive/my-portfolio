import { useState } from 'react';
import { useForm } from 'rc-field-form';

import Form from 'components/Atoms/Form';
import Text from 'components/Atoms/Text';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { Col, Row } from 'components/Atoms/Grid';
import Dropdown from 'components/Atoms/Dropdown';
import animation from '../../../../public/animations/successful.json';

import { StyleSuccess } from './style';
import Lottie from 'lottie-react';

const options = {
  animationData: animation,
  loop: true,
  style: {
    height: '225px'
  }
};

type ContactFormProps = BaseComponent & {};

type FormType = {
  email: string;
  subject: string;
  name: string;
  message: string;
};

const ContactForm = ({ style = {}, ...props }: ContactFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [form] = useForm();

  const onSubmit = async (values: FormType) => {
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      form.resetFields();
      setSuccess(true);
    } catch (error) {
      console.log(error);
      form.setFields([
        {
          name: 'Message',
          // @ts-ignore
          errors: [error?.message ?? 'Error server']
        }
      ]);
    }

    setLoading(false);
  };

  const onSendAgain = () => {
    setSuccess(false);
  };

  if (success) {
    return (
      <StyleSuccess>
        <Lottie {...options} />

        <Text align="center" margin="25px 0">
          Thanks for contacting me, I will be in touch with you soon
        </Text>
        <Button
          onClick={onSendAgain}
          bgColor="primaryGradient"
          style={{ margin: '25px auto' }}
        >
          Send other message
        </Button>
      </StyleSuccess>
    );
  }

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      style={{ maxWidth: 400, margin: '0 auto', ...style }}
      {...props}
    >
      <Title htmlTag="h3" lineHeight="3rem" margin="0 0 30px">
        Contact{' '}
        <Title htmlTag="span" color="primaryGradient" lineHeight="1em">
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
          type="submit"
          loading={loading}
          bgColor="primaryGradient"
          style={{ width: '100%', marginTop: 20 }}
        >
          CONTACT ME NOW!
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
