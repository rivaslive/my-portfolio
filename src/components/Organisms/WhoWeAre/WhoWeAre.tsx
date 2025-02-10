import dynamic from 'next/dynamic';
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import useTranslation from 'hooks/useTransalation';
import Container from 'components/Atoms/Container';

import animation from '@public/animations/animation4.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const options = {
  animationData: animation,
  loop: true,
  style: {
    width: '100%',
    maxWidth: 600,
    margin: '0 auto'
  }
};

type WhoWeAreProps = BaseComponent & {};

const WhoWeAre = (props: WhoWeAreProps) => {
  const { t } = useTranslation();
  const years = new Date().getFullYear() - 2018;

  return (
    <Container style={{ marginTop: 100 }} {...props}>
      <Title
        fontSize="5rem"
        lineHeight="5rem"
        align="center"
        margin="40px 0 0"
        mobileSettings={{
          fontSize: '3rem',
          lineHeight: '3rem'
        }}
      >
        {t('over_the_pass', 'En los últimos')}
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
          {years} {t('years', 'años')}
        </Title>
      </Title>

      <Lottie {...options} />

      <Text margin="30px 0 0" fontSize="1.2rem">
        {t('description1')}
      </Text>
    </Container>
  );
};

export default WhoWeAre;
