import Link from "next/link";

import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 1rem;
  background-color: #ccc;
  align-items: center;
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
`;

const StyledNavItem = styled.li`
  width: 30%;
  height: 40px;
  text-decoration: none;
  justify-content: space-around;
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
