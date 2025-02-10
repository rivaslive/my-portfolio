import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useForm } from 'rc-field-form';

import Form from 'components/Atoms/Form';
import Text from 'components/Atoms/Text';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { Col, Row } from 'components/Atoms/Grid';
import Dropdown from 'components/Atoms/Dropdown';
import useTranslation from 'hooks/useTransalation';
import animation from '../../../../public/animations/successful.json';

import { StyleSuccess } from './style';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const options = {
  animationData: animation,
  loop: false,
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
  const { t } = useTranslation();
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
        {t('contact_with_me', 'Contac')}
        <Title htmlTag="span" color="primaryGradient" lineHeight="1em">
          {t('with_me', 'tame')}
        </Title>
      </Title>
      <Form.Item
        isRequired
        name="email"
        label={t('email', 'Correo electrónico')}
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
          <Form.Item name="subject" label={t('subject', 'Tema')} isRequired>
            <Dropdown
              menu={
                <Dropdown.Menu>
                  <Dropdown.Item key="start-project">
                    {t('start_project', 'Iniciar Proyecto')}
                  </Dropdown.Item>
                  <Dropdown.Item key="freelance">
                    {t('free_lance', 'Freelance')}
                  </Dropdown.Item>
                  <Dropdown.Item key="contractor">
                    {t('contractor', 'Contrato tiempo completo')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              {t('select_option', '--- Seleccione una opción ---')}
            </Dropdown>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item
            name="fullName"
            label={t('full_name', 'Nombre completo')}
            isRequired
          >
            <Input placeholder="John Artur" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="message" label={t('message', 'Mensaje')} isRequired>
        <Input rows={7} htmlTag="textarea" placeholder="Message title" />
      </Form.Item>
      <Form.Item>
        <Button
          type="submit"
          loading={loading}
          bgColor="primaryGradient"
          style={{ width: '100%', marginTop: 20 }}
        >
          {t('contact_me_now', 'Contactame ahora')}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
