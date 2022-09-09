import Text from 'components/Atoms/Text';
import Image from 'components/Atoms/Image';

import { StyleBadge, StyleContent, StyleWrapper } from './style';

type ExperienceProps = BaseComponent & {
  image: string;
  brand: string;
  description: string;
  tasks: string[];
  time?: string;
};

const Experience = ({
  image,
  brand,
  description,
  tasks,
  time,
  ...props
}: ExperienceProps) => {
  return (
    <StyleWrapper {...props}>
      <Image alt="" src={image} width={100} height={100} />
      <StyleContent>
        <Text fontWeight={800} fontSize="1.5rem">
          {brand} {time && <StyleBadge>{time}</StyleBadge>}
        </Text>
        <Text color="secondaryText" fontSize="1rem">
          {description}
        </Text>

        <Text margin="20px 0 0" fontWeight={800} fontSize="1rem">
          Task:
        </Text>

        <ul>
          {tasks.map((task, index) => (
            <Text
              color="secondaryText"
              htmlTag="li"
              key={index}
              fontSize="1rem"
            >
              {task}
            </Text>
          ))}
        </ul>
      </StyleContent>
    </StyleWrapper>
  );
};

export default Experience;
