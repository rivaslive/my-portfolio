import Banner from 'components/Organisms/Banner';
import WhoWeAre from 'components/Organisms/WhoWeAre';
import Projects from 'components/Organisms/Projects';
import Technologies from 'components/Organisms/Technologies';
import Experiences from 'components/Organisms/Experiences';
import Contact from 'components/Organisms/Contact';
import NpmProjects from 'components/Organisms/NpmProjects';

const HomeTemplate = (props: BaseComponent) => {
  return (
    <main {...props}>
      <Banner />
      <WhoWeAre />
      <Technologies id="tech" />
      <Experiences id="experience" />
      <Projects />
      <NpmProjects />
      <Contact id="contact" />
    </main>
  );
};

export default HomeTemplate;
