import styled from "styled-components";

export const Nav = styled.nav<{ $isVisible: boolean }>`
  min-width: 280px;
  position: fixed;
  bottom: 32px;
  left: 0;
  right: 0;
  display: ${(props) => (props.$isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
