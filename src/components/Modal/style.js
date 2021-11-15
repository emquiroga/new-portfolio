import styled from "styled-components";

export const ModalBg = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 111111;
`

export const ModalWrapper = styled.div`
  background: ${props => props.theme.colors.body};
  width: 80%;
  max-width: 500px;
  padding: 10px 20px;
  height: 40vh;
  max-height: 500px;
  margin: 0;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border: 1px inset ${props => props.theme.colors.textSecondary};
  box-shadow: 6px 6px 1px 0px ${props => props.theme.colors.special};
`
export const ModalClose = styled.button`
display: block;
width: 1.5rem;
height: 1.5rem;
position: absolute;
top: 0.5rem;
right: 0.5rem;
border-radius: 50%;
overflow: hidden;
border: none;
background: transparent;
cursor: pointer;
`