import Title from 'components/Atoms/Title';

import useTranslation from 'hooks/useTransalation';
import RenderCV from 'components/Molecules/RenderCV';
import { BannerContent, BannerWrapper } from './style';

const Banner = (props: BaseComponent) => {
  const { t } = useTranslation();

  return (
    <BannerWrapper {...props}>
      <BannerContent>
        <Title
          htmlTag="h1"
          align="center"
          fontWeight={800}
          fontSize="5rem"
          lineHeight="5rem"
          textTransform="uppercase"
          mobileSettings={{
            fontSize: '4rem',
            lineHeight: '4.5rem'
          }}
        >
          Kevin{' '}
          <Title
            htmlTag="span"
            fontWeight={800}
            fontSize="1em"
            textTransform="uppercase"
            color="accentGradient"
          >
            Rivas
          </Title>
        </Title>
        <Title
          htmlTag="h2"
          align="center"
          fontWeight={800}
          fontSize="2rem"
          textTransform="uppercase"
        >
          <Title
            htmlTag="span"
            align="center"
            fontWeight={800}
            fontSize="1em"
            textTransform="uppercase"
            color="primaryGradient"
          >
            {t('engineer')}{' '}
          </Title>
          Sofware
        </Title>

        <RenderCV style={{ marginTop: 50 }} />
      </BannerContent>
    </BannerWrapper>
  );
};

export default Banner;
