import { useEffect, useRef } from 'react';
import Text from 'components/Atoms/Text';

import {StyleBadge, StyleContent, StyleImage, StyleWrapper} from './style';

type ProjectCardProps = BaseComponent & {
  image: string;
  imageHover: string;
  name: string;
  description: string;
  link: string;
  techs: string[];
};

const hoverEffect =
  typeof window !== `undefined` ? require('hover-effect').default : null;

const ProjectCard = ({
  image,
  imageHover,
  name,
  description,
  techs,
  link,
  ...props
}: ProjectCardProps) => {
  const isMount = useRef<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      imageRef?.current &&
      !isMount.current
    ) {
      const el = imageRef.current;

      new hoverEffect({
        parent: el,
        intensity: 0.2,
        speedIn: el.dataset.speedin || undefined,
        speedOut: el.dataset.speedout || undefined,
        easing: el.dataset.easing || undefined,
        hover: el.dataset.hover || undefined,
        image1: image,
        image2: imageHover,
        displacementImage: '/myDistorsionImage.webp'
      });

      isMount.current = true;
    }

    return () => {
      isMount.current = false;
    };
  }, [image, imageHover]);

  return (
    <StyleWrapper {...props}>
      <StyleImage ref={imageRef} alt="" src={image} width={250} height="100%" />
      <StyleContent>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Text
            fontWeight={800}
            fontSize="1.5rem"
            style={{ position: 'relative' }}
          >
            {name} <StyleBadge>Link</StyleBadge>
          </Text>
        </a>
        <Text color="secondaryText" fontSize="1rem">
          {description}
        </Text>

        <Text margin="20px 0 0" fontWeight={800} fontSize="1rem">
          Task:
        </Text>

        {techs.map((tech, index) => (
          <Text color="secondaryText" htmlTag="li" key={index} fontSize="1rem">
            {tech}
          </Text>
        ))}
      </StyleContent>
    </StyleWrapper>
  );
};

export default ProjectCard;
