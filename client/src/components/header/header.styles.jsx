import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 1rem 1.5rem;
  font-size: 2rem;
  font-weight: 300;
`

export const HeaderContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
`

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: .5s all ease-in;
`

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`
