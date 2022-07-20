import Title from 'components/Atoms/Title';
import Container from 'components/Atoms/Container';
import { Col, Row } from 'components/Atoms/Grid';
import useTranslation from 'hooks/useTransalation';
import Experience from 'components/Molecules/Experience';

const Experiences = (props: BaseComponent) => {
  const { t } = useTranslation();
  return (
    <Container style={{ margin: '50px auto' }} {...props}>
      <Title
        align="center"
        fontSize="5rem"
        lineHeight="6rem"
        margin="40px 0 0"
        mobileSettings={{
          fontSize: '3rem',
          lineHeight: '3.2rem'
        }}
      >
        {t('experience', 'Experiencia de')}{' '}
        <Title
          htmlTag="span"
          fontSize="5rem"
          lineHeight="6rem"
          color="accentGradient"
          mobileSettings={{
            fontSize: '3rem',
            lineHeight: '3.2rem'
          }}
        >
          {t('work', 'Trabajo')}
        </Title>
      </Title>

      <br />
      <br />

      <Row gutter={[0, 50]} justify="center">
        <Col span={24}>
          <Experience
            time={t('experiences.experience1.date', '06/2022 - Actualmente')}
            brand="Scotiabank Costa Rica"
            image="/scotiabank.webp"
            tasks={['code improvement', 'Reactjs', 'Nodejs']}
            description={t(
              'experiences.experience1.description',
              'Desarrollador React, Creando y mejorando productos internos de banca online utilizando Reactjs y Nodejs.'
            )}
          />
        </Col>
        <Col span={24}>
          <Experience
            time={t('experiences.experience2.date', '03/2022 - 05/2022')}
            brand="Focus ITO El Salvador"
            image="/focus.jpeg"
            tasks={['Typescript', 'Nextjs', 'Nodejs', 'Maps', 'e-commerce']}
            description={t(
              'experiences.experience2.description',
              'Desarrollador FullStack, procesos y flujos de trabajo.'
            )}
          />
        </Col>
        <Col span={24}>
          <Experience
            time={t('experiences.experience3.date', '03/2021 - 03/2022')}
            brand="Brandy Costa Rica"
            image="/brandy.png"
            tasks={[
              'Typescript',
              'Nextjs',
              'Nodejs',
              'Strapi',
              'Keystonejs',
              'Storybook'
            ]}
            description={
              t(
                'experiences.experience3.description',
                'Desarrollador React, Creando y mejorando productos internos y para clientes utilizando Neactjs y Nodejs. procesos y flujo de trabajo'
              )
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
