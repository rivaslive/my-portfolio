import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import { Col, Row } from 'components/Atoms/Grid';
import useTranslation from 'hooks/useTransalation';
import SkillCard from 'components/Molecules/SkillCard';
import { DataTecnhologies } from 'components/Organisms/Technologies/data';

import { StyleContainer } from './style';

const Technologies = (props: BaseComponent) => {
  const { t } = useTranslation();
  return (
    <StyleContainer {...props}>
      <Title
        fontSize="5rem"
        lineHeight="6rem"
        margin="40px 0 0"
        color="primaryOpacity"
        textTransform="capitalize"
        mobileSettings={{
          fontSize: '3rem',
          lineHeight: '3.2rem'
        }}
      >
        {t('navbar.technologies', 'Tecnomologías')}
      </Title>

      <Text fontSize="1.2rem" color="text">
        {t(
          'text_technology',
          'Estas son algunas de las tecnologías que uso en mis proyectos.'
        )}
      </Text>

      <Row justify="center" gutter={[20, 20]} style={{ marginTop: 50 }}>
        {DataTecnhologies.map(({ title, image, key }) => {
          return (
            <Col xs={24} md={12} lg={8} xl={6} key={key}>
              <SkillCard title={title} image={image} />
            </Col>
          );
        })}
      </Row>
    </StyleContainer>
  );
};

export default Technologies;
