import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.space[4]};
  background-color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.space[6]};
  font-size: ${props => props.theme.fontSizes['4xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.primary[600]};
  text-transform: uppercase;
  letter-spacing: -1px;
`;

// In the render section, replace the KeyRound icon with just "GMX":

<Logo>
  GMX
</Logo>

export default Logo