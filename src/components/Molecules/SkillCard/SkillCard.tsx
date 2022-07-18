import Text from 'components/Atoms/Text';
import Image from 'components/Atoms/Image';

import { SkillCardContainer } from './style';

type SkillCardProps = BaseComponent & {
  title: string;
  image: string;
};

const SkillCard = ({ title, image, ...props }: SkillCardProps) => {
  return (
    <SkillCardContainer {...props}>
      <Image
        alt=""
        width={60}
        height={60}
        src={image}
        style={{ marginRight: 7 }}
      />
      <Text>{title}</Text>
    </SkillCardContainer>
  );
};

export default SkillCard;
