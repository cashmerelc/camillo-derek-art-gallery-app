import { Navigation } from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  font-size: 0.5rem;
  padding: 2rem;
  color: rgb(111, 111, 111);
  text-transform: uppercase;
  justify-content: center;
  letter-spacing: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: white;
  width: 100vw;
  padding: 3rem;
  z-index: 1000;
  box-shadow: 2px 10px 10px 1px rgba(0, 0, 0, 0.05);
`;
export function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <h1>Art Gallery</h1>
      </StyledHeader>
      <div>{children}</div>
      <Navigation />
    </>
  );
}
