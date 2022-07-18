import Text from 'components/Atoms/Text';
import Image from 'components/Atoms/Image';

import { StyleWrapper } from './style';

type ExperienceProps = BaseComponent & {
  image: string;
  brand: string;
  description: string;
  tasks: string[];
};

const Experience = ({
  image,
  brand,
  description,
  tasks,
  ...props
}: ExperienceProps) => {
  return (
    <StyleWrapper {...props}>
      <Image alt="" src={image} width={100} height={100} />
      <div
        style={{
          marginLeft: '10px'
        }}
      >
        <Text fontWeight={800} fontSize="1.5rem">
          {brand}
        </Text>
        <Text color="secondaryText" fontSize="1rem">
          {description}
        </Text>

        <Text margin="20px 0 0" fontWeight={800} fontSize="1rem">
          Task:
        </Text>

        {tasks.map((task, index) => (
          <Text color="secondaryText" htmlTag="li" key={index} fontSize="1rem">
            {task}
          </Text>
        ))}
      </div>
    </StyleWrapper>
  );
};

export default Experience;
