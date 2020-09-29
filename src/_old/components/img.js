import styled from 'styled-components';

export default styled.img`
  border-radius: calc(${({ theme }) => theme.dimensions.spaceUnit} * 0.25);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  margin: calc(${({ theme }) => theme.dimensions.spaceUnit} * 2) auto;
  width: 100%;
`;
