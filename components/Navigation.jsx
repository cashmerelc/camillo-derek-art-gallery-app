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
    <nav>
      <ul>
        <li>
          <a href="/">Spotlight</a>
        </li>
        <li>
          <a href="/art-pieces">Art Pieces</a>
        </li>
        <li>
          <a href="/favorites">Favorites</a>
        </li>
      </ul>
    </nav>
  );
}
