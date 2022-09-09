import styled from 'styled-components';
import { getStyleResponsive, Size } from './Config';

export const StyleContainer = styled.div<{ $size: Size }>`
  display: block;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  ${({ $size }) => getStyleResponsive({ size: $size })}
`;
