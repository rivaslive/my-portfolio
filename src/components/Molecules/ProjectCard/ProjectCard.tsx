import Text from 'components/Atoms/Text';

import {
  StyleBadge,
  StyleContent,
  StyleImage,
  StyleWrapper,
  StyleAnimation
} from './style';

type ProjectCardProps = BaseComponent & {
  image: string;
  imageHover: string;
  name: string;
  description: string;
  link: string;
  techs: string[];
};

const ProjectCard = ({
  image,
  imageHover,
  name,
  description,
  techs,
  link,
  ...props
}: ProjectCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyleWrapper {...props}>
        <StyleAnimation />
        <StyleImage objectFit="cover" src={image} width={250} height="100%" />
        <StyleContent>
          <Text
            fontWeight={800}
            fontSize="1.5rem"
            className="title-link"
            style={{ position: 'relative' }}
          >
            {name} <StyleBadge>Link</StyleBadge>
          </Text>
          <Text color="secondaryText" fontSize="1rem">
            {description}
          </Text>

          <Text margin="20px 0 0" fontWeight={800} fontSize="1rem">
            Task:
          </Text>

          {techs.map((tech, index) => (
            <Text
              color="secondaryText"
              htmlTag="li"
              key={index}
              fontSize="1rem"
            >
              {tech}
            </Text>
          ))}
        </StyleContent>
      </StyleWrapper>
    </a>
  );
};

export default ProjectCard;
