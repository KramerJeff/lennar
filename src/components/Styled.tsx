import styled, { createGlobalStyle } from 'styled-components';
import { Dropdown as AntDropdown, Menu as AntMenu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ReactComponent as LennarLogo } from '../assets/Mark.svg';
const breakpoints = {
  tablet: '834px',
  laptop: '1080px',
  desktop: '1358px',
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter';
    padding: 25px;
  }
`;

const Logo = styled(LennarLogo)`
  margin-right: 41px;
`;

const Disclaimer = styled.span`
  display: inline-block;
  color: #D1D5DB;
  font-size: 14px;
  line-height: 20px;
`;

const TOS = styled.a`
  color: white;
`

const Title = styled.h1<{ purple?: boolean}>`
  font-size: 36px;
  line-height: 40px;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin: 0 0 12px 0;
  color: ${ ({ purple }) => purple ? `#6366F1;` : `white` };
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.04em;
    margin-bottom: 20px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -0.025em;
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 72px;
    line-height: 72px;
    letter-spacing: 0;
  }
`;

const Description = styled.span`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: #D1D5DB;
  max-width: 592px;
  max-height: 84px;
  margin-bottom: 40px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 48px;
  }
  @media (min-width: ${breakpoints.laptop}) {
    font-size: 24px;
  }
`;



const Dropdown = styled(AntDropdown)`
  margin-left: auto;
  margin-right: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  display: none;
  @media (min-width: ${breakpoints.tablet}) {
    display: initial;
  }
`;

const NavLink = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-right: 32px;
`;

const Input = styled.input`
  width: 95%;
  height: 48px;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 12px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
    margin-right: 12px;
    width: 358px;
    max-width: 425px;
  }
`;

const MenuIcon = styled(MenuOutlined)`
  &&& svg {
    color: white;
    width: 16px;
  }
`;

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const LoginContainer = styled.div`
  display: none;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    flex-flow: row;
    align-items: center;
    margin-left: auto;
  }
`;

const Menu = styled(AntMenu)`
  top: 0;
  width: 100%;
`;

const HiringContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  background-color: black;
  width: 309px;
  height: 32px;
  border-radius: 14px;
  padding: 4px;
  margin-top: 45px;
  margin-bottom: 16px;
  @media(min-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
    margin-top: 130px;
  }
`;

const Hiring = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: white;
  background-color: #6366F1;
  padding: 2px 12px;
  border-radius: 10px;
  margin-right: 16px;
`;

const Careers = styled.a`
  font-size: 14px;
  line-height: 20px;
  color: white;

  &:after {
    content: '>';
    margin-left: 15px;
    color: #6B7280;
  }

  &:hover {
    color: white;
  }
`;

export { breakpoints, GlobalStyle, Logo, Disclaimer, TOS, Header, Title, Description, Input, MenuIcon, Nav, NavLink, 
  Form, Dropdown, LoginContainer, Menu, Hiring, Careers, HiringContainer };