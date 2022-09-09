import { css } from 'styled-components';

export type Size = 'small' | 'middle' | 'large';

type Configuration = {
  [key in Size]: { breakpoints: number[]; containerWidths: number[] };
}

const configuration: Configuration = {
  small: {
    breakpoints: [576, 768, 992, 1200, 1400],
    containerWidths: [566, 758, 940, 940, 940]
  },
  middle: {
    breakpoints: [576, 768, 992, 1200, 1400],
    containerWidths: [566, 758, 982, 1100, 1200]
  },
  large: {
    breakpoints: [576, 768, 992, 1200, 1400],
    containerWidths: [566, 758, 982, 1150, 1300]
  },
};

export const getStyleResponsive = ({ size }: { size: Size; }) => {
  let output = css``;
  const config = configuration[size]

  config.breakpoints.forEach((breakpoint, index) => {
    const containerWidth = config.containerWidths[index];
    output = css`
      ${output};

      @media (min-width: ${breakpoint}px) {
        max-width: ${containerWidth}px;
      }
    `;
  });

  return output;
};
