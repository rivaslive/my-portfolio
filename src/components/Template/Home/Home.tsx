import Banner from 'components/Organisms/Banner';
import WhoWeAre from 'components/Organisms/WhoWeAre';
import Technologies from 'components/Organisms/Technologies';
import Experiences from 'components/Organisms/Experiences';
import Animations from 'components/Organisms/Animations';

const HomeTemplate = (props: BaseComponent) => {
  return (
    <main {...props}>
      <Banner />
      {/*<Animations />*/}
      <WhoWeAre />
      <Technologies id="tech" />
      <Experiences id="experience" />
    </main>
  );
};

export default HomeTemplate;
