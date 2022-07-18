import styled from 'styled-components';
import Image from 'components/Atoms/Image';

export const StyleImage = styled(Image)`
  img {
    filter: drop-shadow(
      0 20px 53px ${({ theme }) => theme.colors.primaryOpacity}
    );
  }
`;
