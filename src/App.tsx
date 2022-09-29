import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { animated, useSpring } from 'react-spring';
import { Logo, Disclaimer, TOS, Header, Title, Description, Input, 
  Nav, NavLink, MenuIcon, Dropdown, Form, LoginContainer, Menu, Hiring, HiringContainer, Careers } from './components/Styled';

function App() {
  const AnimatedMenu = animated(Menu);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  const menu = (
    <AnimatedMenu items={
      [
        {
          label: <a href='#'>Product</a>,
          key: 'product'
        },
        {
          label: <a href='#'>Features</a>,
          key: 'features',
        },
        {
          label: <a href='#'>Marketplace</a>,
          key: 'marketplace',
        },
        {
          label: <a href='#'>Company</a>,
          key: 'company',
        },
      ]
    }
    style={props}
    />
  );

  return (
    <div className="App">
      <Header>
        <Logo/>
        <Nav>
          <NavLink href='#'>Product</NavLink>
          <NavLink href='#'>Features</NavLink>
          <NavLink href='#'>Marketplace</NavLink>
          <NavLink href='#'>Company</NavLink>
        </Nav>
        <LoginContainer>
          <NavLink href='#'>Log in</NavLink>
          <Button disabled>Start free trial</Button>
        </LoginContainer>
        <Dropdown overlay={menu} trigger={['click']} overlayStyle={{ top: '0', width: '100%'}}>
          <MenuIcon/>
        </Dropdown>
      </Header>

      <HiringContainer>
        <Hiring>WE'RE HIRING</Hiring>
        <Careers href='#'>Visit our careers page </Careers>
      </HiringContainer>
      
        

      <Title>A better way to</Title>
      <Title purple>ship web apps</Title>
      <Description>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</Description>
      <Form>
        <Input placeholder='Enter your email'></Input>
        <Button>Start free trial</Button>
      </Form>
      <Disclaimer>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our <TOS>terms of service.</TOS></Disclaimer>
    </div>
  );
}

export default App;
