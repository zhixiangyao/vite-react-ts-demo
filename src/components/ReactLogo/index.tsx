import React from 'react'
import styled from 'styled-components'

import logo from '/@/assets/logo.svg'

const Img = styled.img`
  height: 40vmin;

  @media (prefers-reduced-motion: no-preference) {
    animation: react-logo-spin infinite 20s linear;
  }

  @keyframes react-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

const ReactLogo: React.FC = () => (
  <>
    <Img src={logo} className="pointer-events-none" alt="logo" />
    <p>
      Hello Vite + React + ReactRouter + ReactRedux + TypeScript + StyledComponents + TailwindCSS!
    </p>
  </>
)

export default ReactLogo
