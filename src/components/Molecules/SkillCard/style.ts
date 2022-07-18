import styled from 'styled-components';

export const SkillCardContainer = styled.div`
  width: 100%;
  padding: 10px 15px 10px 10px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.bgCard};

  &:hover {
    transform: scale(1.1);
    box-shadow: ${({ theme }) => `0px 0px 10px ${theme.colors.bgCard}`};
  }
`;
