import styled from "@emotion/styled";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5em 0.8em;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  outline: none;
  box-shadow: none;
  font-size: 0.9rem;
  cursor: pointer;
  background: white;
  color: #1a1a1a;
  text-decoration: none;
`.withComponent("a");

export default Button;
