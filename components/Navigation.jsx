import Link from "next/link";

import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 18px;
  background-color: #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const StyledNavItem = styled.li`
  width: 30%;
  height: 40px;
  text-decoration: none;
  align-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export function Navigation() {
  return (
    <StyledNavBar>
      <StyledNavList>
        <StyledNavItem>
          <StyledLink href="/">Spotlight</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="/art-pieces">Art Pieces</StyledLink>
        </StyledNavItem>
        <StyledNavItem>
          <StyledLink href="/favorites">Favorites</StyledLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNavBar>
  );
}
