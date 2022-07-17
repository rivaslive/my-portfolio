import {
  BannerBottomContent,
  BannerContent,
  BannerWrapper,
  StyleImage
} from 'components/Organisms/Banner/style';
import Title from 'components/Atoms/Title';
import Image from 'components/Atoms/Image';
import { Col } from 'components/Atoms/Grid';
import Text from 'components/Atoms/Text';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';

const Banner = (props: BaseComponent) => {
  return (
    <BannerWrapper {...props}>
      <BannerContent>
        <Title
          htmlTag="h1"
          align="center"
          fontWeight={800}
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

        <BannerBottomContent>
          <Col xs={24} lg={12}>
            <StyleImage src="/my-present.png" />
          </Col>

          <Col xs={24} lg={12}>
            <BannerBottomContent gutter={20}>
              <Col sm={24} md={12}>
                <Text fontSize="1.5rem">Contactame para poder darte mi informacion perro</Text>
              </Col>

              <Col sm={24} md={12}>
                <Input placeholder="Your email" />
                <Button
                  style={{
                    width: '100%',
                    marginTop: '1rem'
                  }}
                >
                  Suscribirse
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
