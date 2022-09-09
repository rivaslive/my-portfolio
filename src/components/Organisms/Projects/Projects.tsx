import Title from 'components/Atoms/Title';
import { Col, Row } from 'components/Atoms/Grid';
import useTranslation from 'hooks/useTransalation';
import Container from 'components/Atoms/Container';
import ProjectCard from 'components/Molecules/ProjectCard';
import { DataProjects } from 'components/Organisms/Projects/data';

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
        {DataProjects(t).map((project) => {
          return (
            <Col span={24} key={project.key}>
              <ProjectCard
                name={project.name}
                link={project.link}
                image={project.image}
                techs={project.techs}
                imageHover={project.imageHover}
                description={project.description}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
