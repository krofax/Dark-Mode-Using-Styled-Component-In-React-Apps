import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.5rem;
  color: #fff;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.1rem;
  position: relative;
  width: 4rem;
  height: 2rem;
  }

  h3{
    padding: 3px;
    margin: 5px
  }
`;

const Toggle = ({ toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          <h3>Toggle</h3>
        </Button>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;