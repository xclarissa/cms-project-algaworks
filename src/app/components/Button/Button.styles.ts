import styled from 'styled-components';
import { transparentize } from 'polished'

const COLORS = {
  red: '#F84735',
  primary: '#0099FF',
  foreground: '#274060'
}

const THEME = {
  danger: {
    bg: '#F84735',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2)
    `,
    disabled: {
      bg: transparentize(0.75, COLORS.red), //primeiro parametro opacidade
      color: '#F84735'
    }
  },
  primary: {
    bg: '#0099FF',
    color: '#FFFFFF',
    onHover: `
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2)
    `,
    disabled: {
      bg: transparentize(0.44, COLORS.primary),
      color: '#FFFFFF'
    }
  },
  text: {
    bg: 'transparent',
    color: '#274060',
    onHover: `
      border-color: #274060
    `,
    disabled: {
      bg: transparentize(0.44, '#508AC9'),
      color: '#274060'
    }
  }
};

export const Wrapper = styled.button<{
  variant: 'primary' | 'danger' | 'text';
}>`
  padding: 6px 8px 4px;
  /* border: none; */
  /* border: 1px solid ${(props) => THEME[props.variant].bg}; */

  color: ${(props) => THEME[props.variant].color};
  background-color: ${(props) => THEME[props.variant].bg};
  border: none;
  outline: none;
  
  &:hover,
  &:focus {
    ${(props) => THEME[props.variant].onHover}
  }

  &:disabled {
    background-color: ${props => THEME[props.variant].disabled.bg};
    color: ${props => THEME[props.variant].disabled.color};
    pointer-events: none;
    border-color: transparent;
  }
`;
