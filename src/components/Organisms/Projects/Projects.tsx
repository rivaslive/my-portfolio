import Title from 'components/Atoms/Title';
import { Col, Row } from 'components/Atoms/Grid';
import useTranslation from 'hooks/useTransalation';
import Container from 'components/Atoms/Container';
import ProjectCard from 'components/Molecules/ProjectCard';

type ProjectsProps = BaseComponent & {};

const Projects = (props: ProjectsProps) => {
  const { t } = useTranslation();

  return (
    <Container style={{ margin: '50px auto' }} {...props}>
      <Title
        align="center"
        fontSize="5rem"
        lineHeight="6rem"
        color="primaryGradient"
        mobileSettings={{
          fontSize: '3rem',
          lineHeight: '3.2rem'
        }}
      >
        {t('projects', 'Proyectos')}
      </Title>

      <br />
      <br />

      <Row gutter={[0, 50]} justify="center">
        <Col span={24}>
          <ProjectCard
            name="React Native Beauty Design"
            description={t(
              'projects_all.project1',
              'Lib de componentes para React Native, publicada en NPM.'
            )}
            image="/beauty-design1.jpg"
            imageHover="/beauty-design2.jpg"
            link="https://www.beauty-design.app/"
            techs={['Typescript', 'React Native', 'Nextjs']}
          />
        </Col>

        <Col span={24}>
          <ProjectCard
            name="Catalejo Invest Group"
            description={t(
              'projects_all.project2',
              'Lib de componentes para React Native, publicada en NPM.'
            )}
            image="/catalejo2.png"
            imageHover="/catalejo.jpg"
            link="https://www.catalejo.cr"
            techs={['Typescript', 'React Native', 'Nextjs']}
          />
        </Col>

        <Col span={24}>
          <ProjectCard
            name="Brandformance"
            description={t(
              'projects_all.project3',
              'Lib de componentes para React Native, publicada en NPM.'
            )}
            image="/brandformance.jpg"
            imageHover="/brandformance2.jpg"
            link="https://www.brandformance.io"
            techs={['Typescript', 'Storybook', 'Nextjs']}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
