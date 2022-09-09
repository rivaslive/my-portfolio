import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const WrapperStyle = styled.div`
  .react-pdf__Page__annotations.annotationLayer,
  .react-pdf__Page__textContent {
    display: none;
  }

  .preview-img {
    filter: contrast(1.2) blur(0.5em);
    /* this is needed so Safari keeps sharp edges */
    transform: scale(1);
    display: block;
  }

  canvas, img.preview-img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 500px;
    object-fit: contain;
    object-position: 50% 50%;
    border-radius: 20px;

    ${mediaQueries.tablet} {
      max-height: 100%;
    }
  }
`;
