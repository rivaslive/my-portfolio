import styled from 'styled-components';

export const StyleWrapper = styled.body`
  background: #dddddd;
  min-height: 100vh;
  display: table;
  width: 100%;
  padding: 25px;
  box-sizing: border-box;

  * {
    color: currentColor;
    box-sizing: border-box;
  }
`;

export const StyleContainer = styled.table`
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  color: #444444;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgb(178, 178, 178);
  height: fit-content;
  margin: 25px auto auto;
`;

export const StyleHead = styled.th`
  border-bottom: 1px solid #c1c1c1;
  padding: 10px 20px;

  h1 {
    font-size: 18px;
  }
`;

export const StyleBody = styled.td`
  padding: 10px 20px 30px;

  a {
    color: #002140;
    text-decoration: none;
  }
`;
