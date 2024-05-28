import { Navigation } from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
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
