import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import { Col, Row } from 'components/Atoms/Grid';
import Container from 'components/Atoms/Container';

import { StyleImage } from './style';

type WhoWeAreProps = BaseComponent & {};

const WhoWeAre = (props: WhoWeAreProps) => {
  const years = new Date().getFullYear() - 2018;

  return (
    <Container {...props}>
      <Row align="middle" gutter={10} style={{ marginTop: 50 }}>
        <Col xs={24} lg={12}>
          <Title
            fontSize="5rem"
            lineHeight="5rem"
            margin="40px 0 0"
            mobileSettings={{
              fontSize: '3rem',
              lineHeight: '3rem'
            }}
          >
            Over the past
            <br />
            <Title
              htmlTag="span"
              fontSize="5rem"
              lineHeight="5rem"
              color="primaryGradient"
              mobileSettings={{
                fontSize: '3rem',
                lineHeight: '3rem'
              }}
            >
              {years} years,
            </Title>
          </Title>

          <Text margin="30px 0 0" fontSize="1.2rem">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            debitis delectus dignissimos enim illum nostrum quasi quis sint
            unde! Animi dicta expedita molestiae possimus. Ad debitis dolorum
            perferendis quibusdam sequi! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Beatae debitis delectus dignissimos enim illum
            nostrum quasi quis sint unde! Animi dicta expedita molestiae
            possimus. Ad debitis dolorum perferendis quibusdam sequi! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Beatae debitis
            delectus dignissimos enim illum nostrum quasi quis sint unde! Animi
            dicta expedita molestiae possimus. Ad debitis dolorum perferendis
            quibusdam sequi!
          </Text>
        </Col>
        <Col xs={24} lg={12} style={{ textAlign: 'center' }}>
          <StyleImage alt="Peep Kevin Rivas" src="/peep.svg" />
        </Col>
      </Row>
    </Container>
  );
};

export default WhoWeAre;
