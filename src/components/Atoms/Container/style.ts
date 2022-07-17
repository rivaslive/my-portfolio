import styled from 'styled-components';
import { getStyleResponsive } from './Config';

export const StyleContainer = styled.div`
  display: block;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  ${getStyleResponsive()}
`;
