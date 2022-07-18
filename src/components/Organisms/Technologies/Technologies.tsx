import Title from 'components/Atoms/Title';
import { Col, Row } from 'components/Atoms/Grid';
import SkillCard from 'components/Molecules/SkillCard';

import { StyleContainer } from './style';
import { DataTecnhologies } from 'components/Organisms/Technologies/data';
import Text from 'components/Atoms/Text';

const Technologies = (props: BaseComponent) => {
  return (
    <StyleContainer {...props}>
      <Title
        fontSize="5rem"
        lineHeight="6rem"
        margin="40px 0 0"
        color="primaryOpacity"
        mobileSettings={{
          fontSize: '3rem',
          lineHeight: '3.2rem'
        }}
      >
        Technologies
      </Title>

      <Text fontSize="1.2rem" color="text">
        These are some of the technologies I use.
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
