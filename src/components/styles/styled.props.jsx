import styled from 'styled-components';

const AppWrap = styled.div`
  width: 552px;
  height: 663px;
  position: relative;
`;

const StyledNav = styled.nav`
  z-index: 10;
  position: absolute;
  height: 128px;
  width: 552px;
  padding: 24px;
  background-color: var(--nav-color);
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 0 0 3px var(--border-color);
  &:first-of-type {
    top: 0;
    border-radius: 20px 20px 0 0;
  }
  &:last-of-type {
    bottom: 0;
    border-radius: 0 0 20px 20px;
  }
`;
const Stat = styled.div`
  z-index: 20;
  position: relative;
  width: 336px;
  height: 64px;
  > div {
    background-color: var(--light-purple);
    width: 336px;
    height: 27px;
    border-radius: 14px;
    border: 3px solid var(--border-color);
    overflow: hidden;
    &:first-of-type {
      margin-bottom: 10px;
      > div {
        height: 100%;
        width: 50%;
        background-color: var(--health-color);
      }
    }
    &:last-of-type {
      > div {
        height: 100%;
        width: 50%;
        background-color: var(--happy-color);
      }
    }
  }
`;
const Buttons = styled.button`
  width: 74px;
  height: 27px;
  background-color: var(--action-btn);
  box-shadow: inset 0 0 0 1px var(--border-color);
  border-radius: 8px;
  position: relative;
  color: var(--icon-color);
  > svg {
    width: 20px;
    height: 20px;
    fill: var(--icon-color);
  }
`;
const ActButton = styled.div`
  z-index: 20;
  position: relative;
  height: 62px;
  width: 62px;
  button {
    width: 64px;
    height: 64px;
    border-radius: 40px;
    background-color: var(--action-btn);
    position: absolute;
    box-shadow: inset 0 0 0 1px var(--border-color);
    svg {
      width: 30px;
      height: 30px;
      fill: var(--icon-color);
      /* stroke-width: 10;
        stroke: var(--border-color); */
    }
    &::before {
      width: 64px;
      height: 64px;
      display: block;
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 40px;
      z-index: -1;
      background-color: var(--action-btn-before);
    }
    &:active {
      top: 2px;
      left: 2px;
      &::before {
        top: 0;
        left: 0;
      }
    }
  }
`;

export { AppWrap, Stat, ActButton, Buttons, StyledNav };
