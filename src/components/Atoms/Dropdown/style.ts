import styled from 'styled-components';

export const StyleDrop = styled.div({
  position: 'relative'
});

export const StyleButtonDiv = styled.div``;

export const StyleMenuWrapper = styled.div`
  position: absolute;
  margin-top: 0.25rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  z-index: ${({ theme }) => theme.zIndex.modal};
  background: ${({ theme }) => theme.colors.background};
`;

export const StyleMenu = styled.ul`
  width: max-content;
  overflow: auto;
`;

export const StyleMenuItem = styled.li`
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.text};
  list-style: none;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryOpacity};

    &:first-of-type {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &:last-of-type {
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;

export const StyleIcon = styled.span({
  paddingRight: 7
});
