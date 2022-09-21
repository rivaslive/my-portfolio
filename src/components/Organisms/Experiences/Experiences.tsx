import Title from 'components/Atoms/Title';
import Container from 'components/Atoms/Container';
import { Col, Row } from 'components/Atoms/Grid';
import useTranslation from 'hooks/useTransalation';
import Experience from 'components/Molecules/Experience';
import {DataExperiences} from 'components/Organisms/Experiences/data';

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
        {t('experience', 'Experiencia')}{' '}
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
          {t('work', 'Laboral')}
        </Title>
      </Title>

      <br />
      <br />

      <Row gutter={[0, 50]} justify="center">
        {
          DataExperiences(t).map((experience) => {
            return <Col span={24} key={experience.key}>
              <Experience
                time={experience.time}
                brand={experience.brand}
                image={experience.image}
                tasks={experience.tasks}
                description={experience.description}
              />
            </Col>
          })
        }
      </Row>
    </Container>
  );
};

export default Experiences;
