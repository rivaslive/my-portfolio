import styled from 'styled-components';

export const StyleSuccess = styled.div`
  width: 100%;
  text-align: center;
  padding: 50px 10px;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.bgCard};

  .anticon {
    font-size: 7rem;
    color: ${({ theme }) => theme.colors.primaryOpacity};
  }
`;
