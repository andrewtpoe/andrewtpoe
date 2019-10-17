import styled from 'styled-components';

export default styled.hr`
  background-color: ${({ theme }) => theme.colors.grey2};
  border: none;
  color: ${({ theme }) => theme.colors.grey2};
  height: 1px;
`;
