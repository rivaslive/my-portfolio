import Lottie from 'lottie-react';

import { StyleWrapper } from './style';
import animation from '../../../../public/animations/animation4.json';
import Image from 'components/Atoms/Image';

type AnimationsProps = {};

const options = {
  animationData: animation,
  loop: true,
  style: {
    height: '100%',
  }
};

const Animations = (props: AnimationsProps) => {
  return (
    <StyleWrapper {...props}>
      <Image width="100%" height={400} src="/my-present.png" />
    </StyleWrapper>
  );
};

export default Animations;
