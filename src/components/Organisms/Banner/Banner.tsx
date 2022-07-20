import Link from 'next/link';
import Lottie from 'lottie-react';

import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import { Col } from 'components/Atoms/Grid';
import Button from 'components/Atoms/Button';
import animation from '../../../../public/animations/animation4.json';
import { BannerBottomContent, BannerContent, BannerWrapper } from './style';
import useTranslation from 'hooks/useTransalation';

const options = {
  animationData: animation,
  loop: true,
  style: {
    height: '100%'
  }
};

const Banner = (props: BaseComponent) => {
  const { t } = useTranslation();
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
            {t('software')}{' '}
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
                  {t(
                    'bannerMessage',
                    'Estoy muy feliz de crear una oportunidad juntos.'
                  )}
                </Text>
              </Col>

              <Col sm={24} md={12} style={{ margin: '0 auto' }}>
                <Text fontSize="1rem" color="secondaryText" margin="0 0 10px">
                  {t(
                    'bannerActionText',
                    'Completa el formulario de contacto o sígueme en Linkedin.'
                  )}
                </Text>
                <Link href="#contact" passHref>
                  <a>
                    <Button
                      style={{
                        width: '100%',
                        marginTop: '1rem',
                        textTransform: 'uppercase'
                      }}
                    >
                      {t('contact_me', 'Contacta me')}
                    </Button>
                  </a>
                </Link>
              </Col>
            </BannerBottomContent>
          </Col>
        </BannerBottomContent>
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
