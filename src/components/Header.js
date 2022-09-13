import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
  width: 100%;
  margin-bottom: 4vh;

  & .title {
    font-family: "Pokemon";
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 5px;
    color: #ffde00;

    // Text Border
    -webkit-text-stroke: 0.25rem rgba(var(--blue));

    @media only screen and (max-width: 25.875em) {
      font-size: 1.5rem;
      -webkit-text-stroke: 2px rgba(var(--blue));
    }
  }
`;

export default function Header() {
  return (
    <Navigation>
      <h1 className="title">Pokemon Database</h1>
    </Navigation>
  );
}
