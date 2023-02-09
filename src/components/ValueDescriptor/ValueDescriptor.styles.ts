import styled from 'styled-components';

const THEME = {
  default: {
    color: '#0099FF'
  },
  primary: {
    color: '#274060'
  },
  defaultCurrency: {
    color: '#0099FF'
  },
  primaryCurrency: {
    color: '#274060'
  }
}

export const Wrapper = styled.div<{
  color: 'primary' | 'default';
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 37px;

  span.Description {
    font-size: 14px;
    color: #274060;
  }
 
  span.Currency {
    font-size: 22px;
    color: ${props => THEME[props.color].color}
  }

  span.Value {
    font-size: 22px;
    font-weight: 700;
    color: ${props => THEME[props.color].color}
  }
`;
