import Title from 'components/Atoms/Title';
import Container from 'components/Atoms/Container';
import {Col, Row} from 'components/Atoms/Grid';
import Experience from 'components/Molecules/Experience';

const Experiences = (props: BaseComponent) => {
  return (
    <Container style={{margin: '50px auto'}} {...props}>
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
        Work{' '}
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
          Experiences
        </Title>
      </Title>

      <br/>
      <br/>

      <Row gutter={[0, 50]} justify="center">
        <Col span={24}>
          <Experience
            time="06/2022 - Present"
            brand="Scotiabank Costa Rica"
            description="React Developer, creating and improving online banking internal products using reactjs and Nodejs."
            image="/scotiabank.webp"
            tasks={['code improvement', 'Reactjs', 'Nodejs']}
          />
        </Col>
        <Col span={24}>
          <Experience
            time="03/2022 - 05/2022"
            brand="Focus ITO El Salvador"
            description="Full Stack Developer, Process and Workflow Analyst."
            image="/focus.jpeg"
            tasks={['Typescript', 'Nextjs', 'Nodejs', 'Maps', 'e-commerce']}
          />
        </Col>
        <Col span={24}>
          <Experience
            time="03/2021 - 04/2022"
            brand="Brandy Costa Rica"
            description="Full Stack Developer, creating and improving online banking internal products using reactjs and Nodejs. Process and Workflow Analyst."
            image="/brandy.png"
            tasks={['Typescript', 'Nextjs', 'Nodejs', 'Strapi', 'Keystonejs', 'Storybook']}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
