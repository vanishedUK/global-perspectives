import React, { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar
      bg={isDarkMode ? 'dark' : 'light'}
      variant={isDarkMode ? 'dark' : 'light'}
      fixed="bottom"
    >
      <Container>
        <Navbar.Text>
          © {new Date().getFullYear()} Global Perspectives
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={toggleTheme}>Toggle Theme</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
