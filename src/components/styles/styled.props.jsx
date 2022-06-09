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
  border: var(--border);
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
    background-color: var(--light-color);
    width: 336px;
    height: 27px;
    border-radius: 14px;
    border: var(--border);
    overflow: hidden;
    position: relative;
    &::after {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 14px;
      position: absolute;
      z-index: 10;
      top: 0;
      left: 0;
      box-shadow: inset 1px 1px 1px var(--action-btn),
        //top highlight
        0 0 0 4px var(--color-overlay-dark),
        //outer shadow
        inset -1px -1px 1px var(--color-bg-dark),
        //bottom lowlight
        inset 0rem 0.5rem 0.1rem var(--light-color),
        //inset shadow
        inset 0.5rem 0.5rem 0.5rem var(--light-color); //button gloss
    }
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
  background-color: var(--other-btn);
  border: var(--border);
  border-radius: 8px;
  position: relative;
  color: var(--icon-color);
  box-shadow: -1px -1px 1px var(--other-btn),
    //top highlight
    0 0 0 4px var(--color-overlay-medium),
    //outer shadow
    1px 1px 1px var(--color-bg-dark),
    //bottom lowlight
    inset 0 0 0 var(--color-overlay-dark),
    //inset shadow
    inset 0.5rem 0.5rem 0.25rem var(--light-color); //button gloss
  transition: all 0.2s;
  > svg {
    width: 20px;
    height: 20px;
    fill: var(--icon-color);
  }
  &:active {
    box-shadow: inset 1px 1px 1px var(--action-btn),
      //top highlight
      0 0 0 4px var(--color-overlay-dark),
      //outer shadow
      inset -1px -1px 1px var(--color-bg-light),
      //bottom lowlight
      inset 0.5rem 0.5rem 0.75rem var(--color-bg-dark),
      //inset shadow
      inset 0.5rem 0.5rem 0.5rem var(--light-color); //button gloss
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
    outline: none;
    border: var(--border);
    box-shadow: -1px -1px 1px var(--action-btn),
      //top highlight
      0 0 0 4px var(--color-overlay-medium),
      //outer shadow
      1px 1px 1px var(--color-bg-dark),
      //bottom lowlight
      inset 0 0 0 var(--color-overlay-dark),
      //inset shadow
      inset 0.5rem 0.5rem 0.25rem var(--light-color); //button gloss
    transition: all 0.2s;
    svg {
      width: 30px;
      height: 30px;
      fill: var(--icon-color);
      /* stroke-width: 10;
        stroke: var(--border-color); */
    }
    /* &::before {
      width: 64px;
      height: 64px;
      display: block;
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 40px;
      z-index: -1;
      background-color: var(--action-btn-shadow);
    } */
    &:active {
      box-shadow: inset 1px 1px 1px var(--action-btn),
        //top highlight
        0 0 0 4px var(--color-overlay-dark),
        //outer shadow
        inset -1px -1px 1px var(--color-bg-light),
        //bottom lowlight
        inset 0.5rem 0.5rem 0.75rem var(--color-bg-dark),
        //inset shadow
        inset 0.5rem 0.5rem 0.5rem var(--light-color); //button gloss
    }
  }
`;

export { AppWrap, Stat, ActButton, Buttons, StyledNav };
