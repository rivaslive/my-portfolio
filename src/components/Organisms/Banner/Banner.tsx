import Lottie from 'lottie-react';
import Title from 'components/Atoms/Title';
import { Col } from 'components/Atoms/Grid';
import Text from 'components/Atoms/Text';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';

import animation from '../../../../public/animations/animation4.json';

const options = {
  animationData: animation,
  loop: true,
  style: {
    height: '100%'
  }
};
import {
  BannerBottomContent,
  BannerContent,
  BannerWrapper,
} from './style';

const Banner = (props: BaseComponent) => {
  return (
    <BannerWrapper {...props}>
      <BannerContent>
        <Title
          htmlTag="h1"
          align="center"
          fontWeight={800}
          lineHeight="3rem"
          textTransform="uppercase"
        >
          Kevin{' '}
          <Title
            htmlTag="span"
            fontWeight={800}
            textTransform="uppercase"
            color="primaryGradient"
          >
            Rivas
          </Title>
        </Title>
        <Title
          htmlTag="h2"
          align="center"
          fontWeight={800}
          fontSize="1.3rem"
          textTransform="uppercase"
        >
          <Title
            htmlTag="span"
            align="center"
            fontWeight={800}
            fontSize="1.3rem"
            textTransform="uppercase"
            color="accentGradient"
          >
            Software{' '}
          </Title>
          Engineer
        </Title>

        <BannerBottomContent align="middle" style={{ paddingBottom: '7rem' }}>
          <Col xs={24} lg={12}>
            <Lottie {...options} />
          </Col>

          <Col xs={24} lg={12}>
            <BannerBottomContent gutter={20}>
              <Col sm={24} md={12}>
                <Text
                  fontSize="1.7rem"
                  mobileSettings={{ textAlign: 'center' }}
                >
                  Start project with me, enter your email to communicate with
                  you.
                </Text>
              </Col>

              <Col sm={24} md={12} style={{ margin: '0 auto' }}>
                <Text fontSize="1rem" color="secondaryText" margin="0 0 10px">
                  Enter your email address
                </Text>
                <Input placeholder="example@mail.com" />
                <Button
                  style={{
                    width: '100%',
                    marginTop: '1rem'
                  }}
                >
                  Start Project
                </Button>
              </Col>
            </BannerBottomContent>
          </Col>
        </BannerBottomContent>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
