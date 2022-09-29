import { Button as AntButton } from 'antd';
import styled from 'styled-components';
import { breakpoints } from './Styled';

const StyledButton = styled(AntButton)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.disabled ? `#4B5563` : `#6366F1`};
    border-radius: 6px;
    padding: 12px 16px;
    font-size: 16px;
    height: 48px;
    color: white;
    border: none;
    width: 95%;
    @media (min-width: ${breakpoints.tablet}) {
      width: 139px;
    }
  }
`;
interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
}
const Button = ({disabled, children}: ButtonProps) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>
};

export default Button;